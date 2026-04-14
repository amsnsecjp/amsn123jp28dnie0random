const fs = require("fs");
const path = require("path");

const files = [
  "assets/js/questions_normal.js",
  "assets/js/questions_hard.js",
  "assets/js/questions_expert.js",
];

const root = path.join(__dirname, "..");

for (const f of files) {
  const p = path.join(root, f);
  let text = fs.readFileSync(p, "utf8");
  const lines = text.split("\n");
  const out = lines.map((line) => {
    const m = line.match(/^(\s+)/);
    if (!m) return line;
    const n = m[1].length;
    if (n >= 6) return " ".repeat(n - 2) + line.slice(n);
    return line;
  });
  fs.writeFileSync(p, out.join("\n"), "utf8");
}
