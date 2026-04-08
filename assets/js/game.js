// ★ GASデプロイURL（デプロイ後にここを書き換える）
const GAS_URL = "https://script.google.com/macros/s/AKfycbyztqcAhYs8P9w5zFHZilV148TNZtiFl2rfkDRKITdXDrO7Fe9V2tzNznlIToCBEKAF4g/exec";
// ★ GAS側の Script Properties に設定したトークンと一致させる
const GAS_TOKEN = "CHANGE_ME_TO_A_STRONG_TOKEN";

function toHalfWidthAscii(value) {
    return String(value || "")
        .replace(/[\uFF01-\uFF5E]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 0xFEE0))
        .replace(/\u3000/g, " ");
}

function sanitizeAgentInputValue(value) {
    return toHalfWidthAscii(value)
        .replace(/\s+/g, "")
        .replace(/[^A-Za-z0-9_-]/g, "")
        .slice(0, 9);
}

function resolveAgentName(value) {
    return sanitizeAgentInputValue(value) || "GUEST";
}

class SecurityGame {
    constructor() {
        this.questions = [];
        this.allQuestions = [];
        this.currentIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.username = resolveAgentName(localStorage.getItem('agent_name')); // Load username
        this.difficulty = "Normal";
        this.timer = null;
        this.remainingTime = 180; // 3 minutes
        this.isPaused = false;

        // Removed explicit init() call from constructor to control timing
    }

    init() {
        console.log("Initializing Game...");

        // Restore username if exists
        const input = document.getElementById('username-input');
        if (input) {
            input.maxLength = 9;
            input.value = this.username === "GUEST" ? "" : this.username;
        }

        // Load unlock state
        this.checkUnlocks();

        // Bind Start Screen inputs
        if (input) {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.start('Easy');
                }
            });
            // Save username on change
            input.addEventListener('input', (e) => {
                const sanitized = sanitizeAgentInputValue(e.target.value);
                e.target.value = sanitized;
                this.username = sanitized || "GUEST";
                localStorage.setItem('agent_name', this.username);
            });
        }

        this.bindUiActions();

        // Cheat Code: Click Title 10 times
        let titleClicks = 0;
        const brandTitle = document.querySelector('.brand');
        if (brandTitle) {
            brandTitle.style.cursor = 'pointer';
            brandTitle.addEventListener('click', () => {
                titleClicks++;
                console.log("Debug Click:", titleClicks);
                if (titleClicks >= 10) {
                    localStorage.setItem('unlocked_normal', 'true');
                    localStorage.setItem('unlocked_hard', 'true');
                    console.log("Debug: All unlocked");
                    this.checkUnlocks();
                    alert("DEBUG MODE: ALL LEVELS UNLOCKED");
                    titleClicks = 0;
                }
            });
        }
    }

    bindUiActions() {
        const difficultyButtons = document.querySelectorAll('[data-difficulty]');
        difficultyButtons.forEach((btn) => {
            btn.addEventListener('click', () => {
                const difficulty = btn.getAttribute('data-difficulty');
                if (difficulty) this.start(difficulty);
            });
        });

        const bind = (id, handler) => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('click', handler);
        };

        bind('btn-reset-progress', () => this.resetProgress());
        bind('btn-pause', () => this.pauseGame());
        bind('btn-resume', () => this.resumeGame());
        bind('btn-next-case', () => this.nextQuestion());
        bind('btn-download-log', () => this.downloadLog());
        bind('btn-abort', () => location.reload());
        bind('btn-back-top', () => location.reload());
    }

    checkUnlocks() {
        // LocalStorage keys: 'unlocked_normal', 'unlocked_hard'
        const unlockedNormal = localStorage.getItem('unlocked_normal') === 'true';
        const unlockedHard = localStorage.getItem('unlocked_hard') === 'true';
        const clearedExpert = localStorage.getItem('cleared_expert') === 'true';

        console.log("Checking Unlocks:", { unlockedNormal, unlockedHard, clearedExpert });

        const btnNormal = document.getElementById('btn-normal');
        const btnHard = document.getElementById('btn-hard');

        if (unlockedNormal) {
            btnNormal.disabled = false;
            btnNormal.innerHTML = "NORMAL";
            btnNormal.classList.remove('locked');
        } else {
            btnNormal.disabled = true;
            btnNormal.innerHTML = "NORMAL 🔒";
            btnNormal.classList.add('locked');
        }

        if (unlockedHard) {
            btnHard.disabled = false;
            btnHard.innerHTML = "HARD";
            btnHard.classList.remove('locked');
        } else {
            btnHard.disabled = true;
            btnHard.innerHTML = "HARD 🔒";
            btnHard.classList.add('locked');
        }

        // Badge Check
        const brand = document.querySelector('.brand');
        const existingBadge = document.querySelector('.badge');
        if (clearedExpert && !existingBadge && brand) {
            const badge = document.createElement('span');
            badge.className = 'badge';
            badge.textContent = "EXPERT AGENT";
            brand.appendChild(badge);
        }
    }

    resetProgress() {
        if (confirm("進行状況をリセットしますか？ (Reset progress?)")) {
            console.log("Resetting data...");
            localStorage.clear();
            location.reload();
        }
    }

    start(difficulty) {
        const input = document.getElementById('username-input');
        if (input) {
            const sanitized = sanitizeAgentInputValue(input.value);
            input.value = sanitized;
            this.username = sanitized || "GUEST";
            localStorage.setItem('agent_name', this.username); // Ensure saved on start
        }
        this.difficulty = difficulty;

        // EXPERT MODE TRIGGER CHECK
        // Trigger: Name="CIAexpert" + Click Easy + Hard Unlocked
        const isHardUnlocked = localStorage.getItem('unlocked_hard') === 'true';
        if (this.username === "CIAexpert" && difficulty === 'Easy' && isHardUnlocked) {

            // Provocation Message (New)
            alert("警告：ここから先は修羅の道。\n生半可な知識では太刀打ちできない...\n覚悟はいいか？");

            this.difficulty = "Expert";
            console.log("EXPERT MODE ACTIVATED");
        }

        // Reset Theme
        document.body.classList.remove('theme-expert');

        // Select Data based on Difficulty
        if (this.difficulty === 'Easy') {
            this.allQuestions = QUESTIONS_EASY;
            this.remainingTime = 180;
        } else if (this.difficulty === 'Normal') {
            this.allQuestions = QUESTIONS_NORMAL;
            this.remainingTime = 180;
        } else if (this.difficulty === 'Hard') {
            this.allQuestions = QUESTIONS_HARD;
            this.remainingTime = 180;
        } else if (this.difficulty === 'Expert') {
            this.allQuestions = QUESTIONS_EXPERT;
            this.remainingTime = 90; // 1:30
            document.body.classList.add('theme-expert');
        } else {
            this.allQuestions = QUESTIONS_EASY; // Fallback
        }

        document.getElementById('user-display').textContent = `AGENT: ${this.username} | MODE: ${this.difficulty.toUpperCase()}`;
        this.showScreen('screen-game');

        this.currentIndex = 0;
        this.score = 0;
        this.userAnswers = [];

        // Reset Timer (Using remainingTime set above)
        this.startTimer();

        // Shuffle and pick 10 (or less if not enough)
        this.questions = this.allQuestions
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
            .slice(0, 10);

        this.showQuestion();
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(el => el.classList.add('hidden'));
        const screen = document.getElementById(screenId);
        if (screen) screen.classList.remove('hidden');
    }

    startTimer() {
        this.stopTimer();
        this.updateTimerDisplay();
        this.timer = setInterval(() => {
            if (!this.isPaused) {
                this.remainingTime--;
                this.updateTimerDisplay();
                if (this.remainingTime <= 0) {
                    this.stopTimer();
                    this.endGame(true); // Time out
                }
            }
        }, 1000);
    }

    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    updateTimerDisplay() {
        const minutes = Math.floor(this.remainingTime / 60);
        const seconds = this.remainingTime % 60;
        document.getElementById('timer-text').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    pauseGame() {
        this.isPaused = true;
        document.getElementById('pause-overlay').classList.remove('hidden');
    }

    resumeGame() {
        this.isPaused = false;
        document.getElementById('pause-overlay').classList.add('hidden');
    }

    showQuestion() {
        const q = this.questions[this.currentIndex];

        // Update Info
        document.getElementById('progress-text').textContent = `CASE: ${String(this.currentIndex + 1).padStart(2, '0')} / ${String(this.questions.length).padStart(2, '0')}`;
        document.getElementById('score-text').textContent = `${this.score}`;
        document.getElementById('category-text').textContent = `CAT: ${q.category || 'GENERAL'}`;
        document.getElementById('question-text').textContent = q.text;

        // Generate Choices
        const container = document.getElementById('choices-container');
        container.innerHTML = ''; // Clear old buttons

        // Reset classes
        container.className = 'choices-grid';
        if (q.choices.length === 2) {
            container.classList.add('grid-2');
        } else {
            container.classList.add('grid-3');
        }

        // Use choices exactly as defined in the JSON (No random shuffling here to preserve Green/Yellow/Red order)
        const displayChoices = q.choices;

        displayChoices.forEach((choiceText, index) => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';

            // Assign colors based on position
            // 2 items: 0=Green, 1=Red
            // 3 items: 0=Green, 1=Yellow, 2=Red

            if (displayChoices.length === 2) {
                if (index === 0) btn.classList.add('choice-green');
                else btn.classList.add('choice-red');
            } else {
                if (index === 0) btn.classList.add('choice-green');
                else if (index === 1) btn.classList.add('choice-yellow');
                else btn.classList.add('choice-red');
            }

            const choiceSpan = document.createElement('span');
            choiceSpan.className = 'choice-text';
            choiceSpan.textContent = choiceText;
            btn.appendChild(choiceSpan);
            btn.onclick = () => this.submitAnswer(choiceText);

            container.appendChild(btn);
        });

        // Hide feedback
        document.getElementById('feedback-overlay').classList.add('hidden');
    }

    submitAnswer(choice) {
        if (this.isPaused) return;

        const q = this.questions[this.currentIndex];
        const isCorrect = choice === q.answer;

        // Score logic
        const pointsPerQ = Math.floor(100 / this.questions.length);
        if (isCorrect) {
            this.score += pointsPerQ;
        }

        // Record log
        this.userAnswers.push({
            qId: q.id,
            category: q.category,
            question: q.text,
            userChoice: choice,
            correctAnswer: q.answer,
            isCorrect: isCorrect,
            explanation: q.explanation,
            timestamp: new Date().toISOString()
        });

        this.showFeedback(isCorrect, q);
    }

    showFeedback(isCorrect, q) {
        const fbOverlay = document.getElementById('feedback-overlay');
        const fbTitle = document.getElementById('fb-title');
        const fbExp = document.getElementById('fb-explanation');

        fbOverlay.classList.remove('hidden');
        if (isCorrect) {
            fbTitle.textContent = "CORRECT";
            fbTitle.className = "feedback-title correct";
        } else {
            fbTitle.textContent = "INCORRECT";
            fbTitle.className = "feedback-title incorrect";
        }

        // Build feedback using safe DOM APIs to avoid HTML injection.
        fbExp.textContent = '';
        const answerStrong = document.createElement('strong');
        answerStrong.textContent = `正解: ${q.answer}`;
        fbExp.appendChild(answerStrong);
        fbExp.appendChild(document.createElement('br'));
        fbExp.appendChild(document.createElement('br'));
        fbExp.appendChild(document.createTextNode(q.explanation || ''));
    }

    nextQuestion() {
        this.currentIndex++;
        if (this.currentIndex < this.questions.length) {
            this.showQuestion();
        } else {
            this.endGame();
        }
    }

    endGame(isTimeout = false) {
        this.stopTimer();
        document.getElementById('feedback-overlay').classList.add('hidden');
        this.showScreen('screen-result');

        const scoreEl = document.getElementById('final-score');
        const rankEl = document.getElementById('final-rank');
        const msgEl = document.getElementById('final-msg');

        scoreEl.textContent = this.score;

        let rank = 'D';
        let rankClass = 'rank-d';

        // Rank Logic
        if (this.score === 100) {
            rank = 'Ｓ';
            rankClass = 'rank-s';
        } else if (this.score >= 80) {
            rank = 'Ａ';
            rankClass = 'rank-a';
        } else if (this.score >= 60) {
            rank = 'Ｂ';
            rankClass = 'rank-b';
        } else if (this.score >= 40) {
            rank = 'Ｃ';
            rankClass = 'rank-c';
        } else {
            rank = 'Ｄ';
            rankClass = 'rank-d';
        }

        // Apply
        rankEl.textContent = rank;
        rankEl.className = `rank-large ${rankClass}`;
        scoreEl.textContent = this.score;

        // Message Logic
        if (isTimeout || this.score <= 70) {
            msgEl.textContent = "MISSION FAILED";
            msgEl.style.color = "var(--danger)";
        } else {
            msgEl.textContent = "MISSION COMPLETED";
            msgEl.style.color = "var(--secondary)"; // Green/Success
        }

        // UNLOCK HINTS & LOGIC (Updated)
        if (this.difficulty === 'Hard') {
            if (this.score === 100) {
                // Hint for Expert
                msgEl.innerHTML = (msgEl.innerHTML || "") + "<br><br><em>「CIAexpert がEASYをプレイすると、、？」</em>";
            } else if (this.score <= 90) {
                msgEl.innerHTML = (msgEl.innerHTML || "") + "<br><br><em>HARD100点を極めし者は新たな道が開かれん...</em>";
            }
        }

        // Unlock Logic
        console.log("Checking Score for Unlock:", this.score);
        if (this.score >= 90) {
            if (this.difficulty === 'Easy') {
                localStorage.setItem('unlocked_normal', 'true');
                console.log("Unlocked Normal!");
                msgEl.textContent += " [NORMAL MODE UNLOCKED]";
            } else if (this.difficulty === 'Normal') {
                localStorage.setItem('unlocked_hard', 'true');
                console.log("Unlocked Hard!");
                msgEl.textContent += " [HARD MODE UNLOCKED]";
            } else if (this.difficulty === 'Expert') {
                localStorage.setItem('cleared_expert', 'true');
                msgEl.textContent += " [EXPERT BADGE ACQUIRED]";
            }
        }

        this.renderReviewList();
        this.sendLog(isTimeout);
    }

    sendLog(isTimeout = false) {
        if (GAS_URL === "YOUR_GAS_DEPLOY_URL_HERE") {
            console.warn("GAS_URL未設定: ログ送信スキップ");
            return;
        }

        const resultText = (isTimeout || this.score <= 70) ? "MISSION FAILED" : "MISSION COMPLETED";

        const payload = {
            agent: this.username,
            difficulty: this.difficulty,
            score: this.score,
            result: resultText,
            token: GAS_TOKEN,
            questions: this.userAnswers.map(ans => ({
                id: ans.qId,
                correct: ans.isCorrect
            }))
        };

        fetch(GAS_URL, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        })
        .then(() => console.log("ログ送信完了"))
        .catch(err => console.error("ログ送信エラー:", err));
    }

    renderReviewList() {
        const container = document.getElementById('review-list');
        container.textContent = '';
        const title = document.createElement('h3');
        title.textContent = 'MISON DEBRIEFING';
        container.appendChild(title);

        this.userAnswers.forEach((ans, index) => {
            const item = document.createElement('div');
            item.className = 'review-item';
            item.classList.add(ans.isCorrect ? 'review-correct' : 'review-incorrect');

            const header = document.createElement('div');
            header.className = 'review-header';

            const qNum = document.createElement('span');
            qNum.className = 'review-q-num';
            qNum.textContent = `Q${index + 1} [${ans.category}]`;

            const status = document.createElement('span');
            status.className = 'review-status';
            status.textContent = ans.isCorrect ? 'O' : 'X';

            header.appendChild(qNum);
            header.appendChild(status);

            const body = document.createElement('div');
            body.className = 'review-body';

            const reviewText = document.createElement('p');
            reviewText.className = 'review-text';
            reviewText.textContent = ans.question;

            const reviewAns = document.createElement('div');
            reviewAns.className = 'review-ans';

            const yours = document.createElement('span');
            yours.textContent = `YOURS: ${ans.userChoice}`;

            const correct = document.createElement('span');
            correct.textContent = `Orbit: ${ans.correctAnswer}`;

            reviewAns.appendChild(yours);
            reviewAns.appendChild(correct);
            body.appendChild(reviewText);
            body.appendChild(reviewAns);
            item.appendChild(header);
            item.appendChild(body);
            container.appendChild(item);
        });
    }

    downloadLog() {
        const lines = [];
        lines.push(`SECURITY TRAINING LOG`);
        lines.push(`=====================`);
        lines.push(`Date: ${new Date().toLocaleString()}`);
        lines.push(`Agent: ${this.username}`);
        lines.push(`Difficulty: ${this.difficulty}`);
        lines.push(`Score: ${this.score} / 100`);
        lines.push(`Result: ${document.getElementById('final-msg').textContent}`);
        lines.push(`---------------------`);

        this.userAnswers.forEach((ans, idx) => {
            lines.push(`[Q${idx + 1}] ID:${ans.qId} (${ans.category}) - ${ans.isCorrect ? "CORRECT" : "WRONG"}`);
            lines.push(`Question: ${ans.question}`);
            lines.push(`Your Answer: ${ans.userChoice}`);
            lines.push(`Correct Answer: ${ans.correctAnswer}`);
            lines.push(`Explanation: ${ans.explanation}`);
            lines.push(``);
        });

        const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `security_log_${this.username}_${Date.now()}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    window.game = new SecurityGame();
    window.game.init();
});
