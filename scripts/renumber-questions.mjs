/**
 * Normal→N01–N40, Hard→H01–H40, Expert→X01–X40 に採番し直し、ID昇順でソートして上書きする。
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function compareQuestionId(idA, idB) {
  const sa = String(idA);
  const sb = String(idB);
  const mA = sa.match(/^([A-Za-z]+)(\d+)$/);
  const mB = sb.match(/^([A-Za-z]+)(\d+)$/);
  if (!mA || !mB) return sa.localeCompare(sb);
  const cmp = mA[1].toUpperCase().localeCompare(mB[1].toUpperCase());
  if (cmp !== 0) return cmp;
  return parseInt(mA[2], 10) - parseInt(mB[2], 10);
}

function extractArrayBody(filePath, constName) {
  const raw = fs.readFileSync(filePath, "utf8");
  const m = raw.match(new RegExp(`const ${constName} = \\[([\\s\\S]*)\\];\\s*$`));
  if (!m) throw new Error(`Parse failed: ${constName} in ${filePath}`);
  return m[1];
}

function parseQuestionObjects(body) {
  const objs = [];
  let depth = 0;
  let start = -1;
  for (let i = 0; i < body.length; i++) {
    const ch = body[i];
    if (ch === "{") {
      if (depth === 0) start = i;
      depth++;
    } else if (ch === "}") {
      depth--;
      if (depth === 0 && start >= 0) {
        objs.push(body.slice(start, i + 1));
        start = -1;
      }
    }
  }
  return objs;
}

function getId(objStr) {
  const m = objStr.match(/id:\s*"([^"]+)"/);
  return m ? m[1] : "";
}

function setId(objStr, newId) {
  return objStr.replace(/id:\s*"[^"]+"/, `id: "${newId}"`);
}

function prefixNum(prefix, n) {
  return prefix + String(n).padStart(2, "0");
}

function transformFile(relPath, constName, prefix, count) {
  const filePath = path.join(root, relPath);
  const body = extractArrayBody(filePath, constName);
  const objs = parseQuestionObjects(body);
  if (objs.length !== count) {
    throw new Error(`${relPath}: expected ${count} questions, got ${objs.length}`);
  }
  const sorted = objs.slice().sort((a, b) => compareQuestionId(getId(a), getId(b)));
  const out = sorted.map((o, i) => setId(o, prefixNum(prefix, i + 1)));
  const header = `const ${constName} = [\n`;
  const footer = `\n];\n`;
  fs.writeFileSync(filePath, header + out.map((o) => "  " + o.split("\n").join("\n  ")).join(",\n") + footer, "utf8");
  console.log(`OK ${relPath} -> ${prefix}01..${prefix}${String(count).padStart(2, "0")}`);
}

transformFile("assets/js/questions_normal.js", "QUESTIONS_NORMAL", "N", 40);
transformFile("assets/js/questions_hard.js", "QUESTIONS_HARD", "H", 40);
transformFile("assets/js/questions_expert.js", "QUESTIONS_EXPERT", "X", 40);
