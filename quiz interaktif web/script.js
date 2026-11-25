const rawQuestions = [
    {
        q: "Pizza dipotong 8 sama besar. Adik makan 3 potong, Kakak makan 2 potong. Berapa bagian yang sudah dimakan?",
        pic: `<svg width="104" height="104" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="42" fill="#ffd54f" stroke="#540000" stroke-width="4"/>
            <path d="M50,50 L50,8 A42,42 0 0,1 92,50 Z" fill="#c62828"/>
            <path d="M50,50 L92,50 A42,42 0 0,1 50,92 Z" fill="#c62828"/>
            <path d="M50,50 L50,92 A42,42 0 0,1 20,80 Z" fill="#ef6c00"/>
            <line x1="50" y1="8" x2="50" y2="92" stroke="#540000" stroke-width="2.5"/>
            <line x1="8" y1="50" x2="92" y2="50" stroke="#540000" stroke-width="2.5"/>
            <line x1="20" y1="20" x2="80" y2="80" stroke="#540000" stroke-width="2.5"/>
            <line x1="80" y1="20" x2="20" y2="80" stroke="#540000" stroke-width="2.5"/>
        </svg>`,
        opts: ["5/8 bagian", "3/8 bagian", "5/16 bagian", "6/8 bagian"],
        ans: 0
    },
    {
        q: "Akuarium kubus panjang sisinya 10 cm. Berapa volume air maksimal di dalamnya?",
        pic: `<svg width="114" height="100" viewBox="0 0 120 106">
            <polygon points="32,32 82,32 82,82 32,82" fill="#4fc3f7" fill-opacity="0.65" stroke="#540000" stroke-width="3.5"/>
            <polygon points="47,17 97,17 82,32 32,32" fill="#81d4fa" stroke="#540000" stroke-width="3.5"/>
            <polygon points="82,32 97,17 97,67 82,82" fill="#29b6f6" stroke="#540000" stroke-width="3.5"/>
            <text x="60" y="99" text-anchor="middle" font-size="13" font-weight="bold" fill="#540000">sisi = 10 cm</text>
        </svg>`,
        opts: ["100 cm³", "300 cm³", "1.000 cm³", "600 cm³"],
        ans: 2
    },
    {
        q: "Kecepatan sepeda Budi 15 km/jam. Jika jarak ke sekolah 30 km, berapa jam waktu tempuhnya?",
        pic: `<svg width="130" height="86" viewBox="0 0 136 88">
            <circle cx="34" cy="64" r="15" fill="none" stroke="#540000" stroke-width="4"/>
            <circle cx="102" cy="64" r="15" fill="none" stroke="#540000" stroke-width="4"/>
            <polyline points="34,64 58,40 88,40 102,64" fill="none" stroke="#ffb300" stroke-width="4"/>
            <line x1="58" y1="40" x2="68" y2="64" stroke="#540000" stroke-width="4"/>
            <text x="68" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#540000">15 km/jam</text>
        </svg>`,
        opts: ["1 jam", "2 jam", "3 jam", "45 menit"],
        ans: 1
    },
    {
        q: "Hasil penjumlahan desimal 2,5 + 1,75 adalah...",
        pic: `<svg width="136" height="72" viewBox="0 0 140 74">
            <rect x="8" y="10" width="124" height="52" rx="15" fill="#540000" stroke="#ffc107" stroke-width="3.5"/>
            <text x="70" y="43" text-anchor="middle" font-size="21" font-weight="bold" fill="#ffd54f">2,5 + 1,75</text>
        </svg>`,
        opts: ["3,25", "4,25", "4,15", "3,80"],
        ans: 1
    },
    {
        q: "Balok berukuran panjang 12 cm, lebar 5 cm, dan tinggi 4 cm. Berapa volumenya?",
        pic: `<svg width="130" height="90" viewBox="0 0 136 92">
            <rect x="18" y="26" width="78" height="44" fill="#ffd54f" stroke="#540000" stroke-width="3.5"/>
            <polygon points="18,26 38,12 116,12 96,26" fill="#ffe082" stroke="#540000" stroke-width="3.5"/>
            <polygon points="96,26 116,12 116,56 96,70" fill="#ffb300" stroke="#540000" stroke-width="3.5"/>
            <text x="62" y="86" text-anchor="middle" font-size="12" font-weight="bold" fill="#540000">12 × 5 × 4 cm</text>
        </svg>`,
        opts: ["120 cm³", "200 cm³", "240 cm³", "60 cm³"],
        ans: 2
    },
    {
        q: "Jarak di peta 4 cm dengan skala 1 : 500.000. Berapa jarak sebenarnya?",
        pic: `<svg width="126" height="84" viewBox="0 0 132 86">
            <rect x="14" y="14" width="104" height="58" rx="12" fill="#fffde7" stroke="#540000" stroke-width="3.5"/>
            <circle cx="35" cy="44" r="6" fill="#c62828"/>
            <circle cx="97" cy="44" r="6" fill="#c62828"/>
            <line x1="35" y1="44" x2="97" y2="44" stroke="#540000" stroke-width="2.5" stroke-dasharray="5,5"/>
            <text x="66" y="34" text-anchor="middle" font-size="12" font-weight="bold" fill="#540000">4 cm</text>
        </svg>`,
        opts: ["2 km", "20 km", "200 km", "2.000 km"],
        ans: 1
    },
    {
        q: "Bentuk pecahan paling sederhana dari 18/24 adalah...",
        pic: `<svg width="108" height="86" viewBox="0 0 112 88">
            <rect x="21" y="9" width="70" height="70" rx="16" fill="#ffb300" stroke="#540000" stroke-width="3.5"/>
            <text x="56" y="38" text-anchor="middle" font-size="20" font-weight="bold" fill="#540000">18</text>
            <line x1="36" y1="44" x2="76" y2="44" stroke="#540000" stroke-width="3.5"/>
            <text x="56" y="67" text-anchor="middle" font-size="20" font-weight="bold" fill="#540000">24</text>
        </svg>`,
        opts: ["2/3", "3/4", "4/6", "6/8"],
        ans: 1
    },
    {
        q: "Persegi panjang panjangnya 15 m dan lebarnya 8 m. Berapa kelilingnya?",
        pic: `<svg width="132" height="84" viewBox="0 0 138 86">
            <rect x="22" y="18" width="88" height="48" fill="#ffe082" stroke="#540000" stroke-width="4"/>
            <text x="66" y="14" text-anchor="middle" font-size="12" font-weight="bold" fill="#540000">15 m</text>
            <text x="124" y="47" text-anchor="middle" font-size="12" font-weight="bold" fill="#540000">8 m</text>
        </svg>`,
        opts: ["23 meter", "46 meter", "120 meter", "30 meter"],
        ans: 1
    },
    {
        q: "Perbandingan kelereng Andi dan Doni 3 : 5. Kelereng Andi 12 butir. Berapa kelereng Doni?",
        pic: `<svg width="126" height="76" viewBox="0 0 132 78">
            <circle cx="35" cy="34" r="13" fill="#c62828"/>
            <circle cx="66" cy="34" r="13" fill="#ffb300"/>
            <circle cx="97" cy="34" r="13" fill="#540000"/>
            <text x="66" y="68" text-anchor="middle" font-size="13" font-weight="bold" fill="#540000">Rasio 3 : 5</text>
        </svg>`,
        opts: ["15 butir", "18 butir", "20 butir", "25 butir"],
        ans: 2
    },
    {
        q: "Hasil dari 3/4 × 20 adalah...",
        pic: `<svg width="136" height="72" viewBox="0 0 140 74">
            <rect x="8" y="10" width="124" height="52" rx="15" fill="#540000" stroke="#ffc107" stroke-width="3.5"/>
            <text x="70" y="43" text-anchor="middle" font-size="20" font-weight="bold" fill="#ffd54f">3/4 × 20 = ?</text>
        </svg>`,
        opts: ["12", "15", "16", "18"],
        ans: 1
    }
];

const syms = ["▲", "◆", "●", "■"];

let questions = [];
let qIdx = 0;
let score = 0;
let nameVal = "";
let locked = false;

let audioCtx = null;
let bgmOn = false;
let sfxOn = true;
let bgmTimer = null;
let notePos = 0;

const bgmPattern = [523.25, 659.25, 783.99, 659.25, 698.46, 880.00, 783.99, 587.33];

const curtain = document.getElementById("curtain");
const bgmBtn = document.getElementById("bgm-btn");
const sfxBtn = document.getElementById("sfx-btn");
const homeCanvas = document.getElementById("home-canvas");
const studentNameInput = document.getElementById("student-name");
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const retryBtn = document.getElementById("retry-btn");

function shuffleArray(list) {
    const arr = [...list];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function buildBalancedDeck() {
    const targetSlots = shuffleArray([0, 0, 0, 1, 1, 1, 2, 2, 3, 3]);
    return rawQuestions.map((item, idx) => {
        const correctText = item.opts[item.ans];
        const distractors = shuffleArray(item.opts.filter((_, i) => i !== item.ans));
        const desiredPos = targetSlots[idx];
        const ordered = [...distractors];
        ordered.splice(desiredPos, 0, correctText);
        return {
            q: item.q,
            pic: item.pic,
            opts: ordered,
            ans: desiredPos
        };
    });
}

function initAudio() {
    if (!audioCtx) {
        const AudioCls = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioCls();
    }
    if (audioCtx.state === "suspended") {
        audioCtx.resume();
    }
}

function playSound(freq, dur, type, vol, delay = 0) {
    if (!sfxOn) return;
    initAudio();
    const t = audioCtx.currentTime + delay;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    gain.gain.setValueAtTime(vol, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + dur);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(t);
    osc.stop(t + dur + 0.02);
}

function startBgm() {
    stopBgm();
    initAudio();
    bgmOn = true;
    bgmBtn.textContent = "❚❚ Musik: ON";
    bgmBtn.classList.add("on");
    bgmBtn.classList.remove("muted");

    bgmTimer = setInterval(() => {
        if (!bgmOn || !audioCtx || audioCtx.state !== "running") return;
        const f = bgmPattern[notePos % bgmPattern.length];
        const t = audioCtx.currentTime;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(f, t);
        gain.gain.setValueAtTime(0.055, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(t);
        osc.stop(t + 0.22);
        notePos++;
    }, 260);
}

function stopBgm() {
    bgmOn = false;
    if (bgmTimer) {
        clearInterval(bgmTimer);
        bgmTimer = null;
    }
    bgmBtn.textContent = "♪ Musik: OFF";
    bgmBtn.classList.remove("on");
}

bgmBtn.addEventListener("click", () => {
    if (bgmOn) stopBgm();
    else startBgm();
});

sfxBtn.addEventListener("click", () => {
    sfxOn = !sfxOn;
    sfxBtn.textContent = sfxOn ? "✦ Suara: ON" : "✦ Suara: OFF";
    sfxBtn.classList.toggle("muted", !sfxOn);
    if (sfxOn) playSound(660, 0.09, "sine", 0.1, 0);
});

function withTransition(callback) {
    curtain.classList.add("active");
    setTimeout(() => {
        callback();
        curtain.classList.remove("active");
    }, 210);
}

const mascot = { x: 180, yOff: 0, vy: 0, dir: 1 };
let tick = 0;

homeCanvas.addEventListener("click", () => {
    if (!bgmOn) startBgm();
    if (mascot.yOff === 0) {
        mascot.vy = -9.5;
        playSound(440, 0.08, "triangle", 0.11, 0);
        playSound(660, 0.12, "triangle", 0.11, 0.06);
    }
});

function drawHomeStage() {
    tick++;
    const c = homeCanvas.getContext("2d");
    const w = homeCanvas.width;
    const h = homeCanvas.height;

    const bg = c.createLinearGradient(0, 0, 0, h);
    bg.addColorStop(0, "#ffe58f");
    bg.addColorStop(0.72, "#ffca3a");
    bg.addColorStop(0.72, "#871111");
    bg.addColorStop(1, "#4d0000");
    c.fillStyle = bg;
    c.fillRect(0, 0, w, h);

    c.fillStyle = "rgba(255, 255, 255, 0.65)";
    for (let i = 0; i < 3; i++) {
        const cx = ((tick * (0.4 + i * 0.12) + i * 250) % (w + 140)) - 70;
        const cy = 32 + i * 26;
        c.beginPath();
        c.arc(cx, cy, 17, 0, Math.PI * 2);
        c.arc(cx + 15, cy - 4, 21, 0, Math.PI * 2);
        c.arc(cx + 32, cy, 15, 0, Math.PI * 2);
        c.fill();
    }

    c.fillStyle = "#ffc107";
    c.fillRect(0, h * 0.72 - 4, w, 5);

    if (mascot.yOff < 0 || mascot.vy < 0) {
        mascot.yOff += mascot.vy;
        mascot.vy += 0.6;
        if (mascot.yOff >= 0) {
            mascot.yOff = 0;
            mascot.vy = 0;
        }
    }

    mascot.x += mascot.dir * 1.1;
    if (mascot.x > w - 60) mascot.dir = -1;
    if (mascot.x < 60) mascot.dir = 1;

    const groundY = h * 0.72 + mascot.yOff;
    c.save();
    c.translate(mascot.x, groundY);

    c.fillStyle = "#ffc107";
    c.strokeStyle = "#3b0707";
    c.lineWidth = 4;
    c.beginPath();
    c.roundRect(-30, -62, 60, 56, 26);
    c.fill();
    c.stroke();

    c.fillStyle = "#871111";
    c.beginPath();
    c.moveTo(-18, -58);
    c.lineTo(-24, -76);
    c.lineTo(-7, -64);
    c.closePath();
    c.fill();
    c.stroke();

    c.beginPath();
    c.moveTo(18, -58);
    c.lineTo(24, -76);
    c.lineTo(7, -64);
    c.closePath();
    c.fill();
    c.stroke();

    c.fillStyle = "#ffffff";
    c.beginPath();
    c.arc(-11, -40, 7.5, 0, Math.PI * 2);
    c.arc(11, -40, 7.5, 0, Math.PI * 2);
    c.fill();
    c.stroke();

    c.fillStyle = "#2b0000";
    c.beginPath();
    c.arc(-9.5, -40, 3.4, 0, Math.PI * 2);
    c.arc(12.5, -40, 3.4, 0, Math.PI * 2);
    c.fill();

    c.strokeStyle = "#2b0000";
    c.lineWidth = 3.2;
    c.lineCap = "round";
    c.beginPath();
    c.arc(0, -27, 10, 0.15 * Math.PI, 0.85 * Math.PI);
    c.stroke();

    c.restore();

    if (!document.getElementById("screen-home").classList.contains("hidden")) {
        requestAnimationFrame(drawHomeStage);
    }
}

startBtn.addEventListener("click", startQuiz);
studentNameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") startQuiz();
});

function startQuiz() {
    const trimmed = studentNameInput.value.trim();
    if (!trimmed) {
        playSound(210, 0.14, "square", 0.08, 0);
        studentNameInput.focus();
        return;
    }

    if (!bgmOn) startBgm();
    playSound(587.33, 0.12, "triangle", 0.12, 0);

    questions = buildBalancedDeck();
    nameVal = trimmed;
    qIdx = 0;
    score = 0;

    withTransition(() => {
        document.getElementById("show-name").textContent = nameVal;
        document.getElementById("show-score").textContent = "0 pt";
        document.getElementById("screen-home").classList.add("hidden");
        document.getElementById("screen-done").classList.add("hidden");
        const quizEl = document.getElementById("screen-quiz");
        quizEl.classList.remove("hidden");
        quizEl.classList.remove("view-enter");
        void quizEl.offsetWidth;
        quizEl.classList.add("view-enter");
        renderQ();
    });
}

function renderQ() {
    locked = false;
    const item = questions[qIdx];

    document.getElementById("show-count").textContent = `${qIdx + 1} / ${questions.length}`;
    document.getElementById("progress-bar").style.width = `${((qIdx + 1) / questions.length) * 100}%`;
    document.getElementById("static-pic").innerHTML = item.pic;
    document.getElementById("q-text").textContent = item.q;

    const strip = document.getElementById("result-strip");
    strip.className = "result-strip hidden";
    strip.textContent = "";
    nextBtn.classList.add("hidden");

    const grid = document.getElementById("grid-opts");
    grid.innerHTML = "";

    item.opts.forEach((txt, i) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `opt-btn opt-c${i}`;
        btn.innerHTML = `<span class="opt-sym">${syms[i]}</span><span>${txt}</span>`;
        btn.addEventListener("click", () => handlePick(i));
        grid.appendChild(btn);
    });
}

function handlePick(choice) {
    if (locked) return;
    locked = true;

    const item = questions[qIdx];
    const buttons = document.querySelectorAll(".opt-btn");
    const strip = document.getElementById("result-strip");

    buttons.forEach((b, i) => {
        b.disabled = true;
        if (i === item.ans) b.classList.add("right-ans");
        else if (i === choice) b.classList.add("wrong-ans");
        else b.classList.add("dim-ans");
    });

    if (choice === item.ans) {
        score += 10;
        document.getElementById("show-score").textContent = `${score} pt`;
        playSound(523.25, 0.1, "triangle", 0.13, 0);
        playSound(659.25, 0.1, "triangle", 0.13, 0.08);
        playSound(783.99, 0.2, "triangle", 0.14, 0.16);
        strip.textContent = "Benar! +10 pt";
        strip.classList.add("ok");
    } else {
        playSound(200, 0.14, "sawtooth", 0.08, 0);
        playSound(150, 0.2, "sawtooth", 0.08, 0.11);
        strip.textContent = `Jawaban yang benar: ${item.opts[item.ans]}`;
        strip.classList.add("no");
    }

    strip.classList.remove("hidden");
    nextBtn.textContent = qIdx === questions.length - 1 ? "LIHAT HASIL ▶" : "SOAL BERIKUTNYA ▶";
    nextBtn.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
    playSound(523.25, 0.08, "sine", 0.08, 0);
    qIdx++;
    if (qIdx < questions.length) {
        withTransition(() => {
            renderQ();
        });
    } else {
        showDone();
    }
});

function showDone() {
    withTransition(() => {
        document.getElementById("screen-quiz").classList.add("hidden");
        const doneEl = document.getElementById("screen-done");
        doneEl.classList.remove("hidden");
        doneEl.classList.remove("view-enter");
        void doneEl.offsetWidth;
        doneEl.classList.add("view-enter");

        document.getElementById("done-title").textContent = `Mantap, ${nameVal}!`;
        document.getElementById("done-score").textContent = score;

        let msg = "Bagus! Coba lagi biar nilainya makin tinggi.";
        if (score >= 100) {
            msg = "Nilai sempurna! Kamu jago banget ngitung soal kelas 5.";
            playSound(1046.5, 0.24, "triangle", 0.14, 0);
        } else if (score >= 70) {
            msg = "Keren banget! Hasil hitunganmu sudah mantap.";
        }
        document.getElementById("done-msg").textContent = msg;
    });
}

retryBtn.addEventListener("click", () => {
    studentNameInput.value = "";
    withTransition(() => {
        document.getElementById("screen-done").classList.add("hidden");
        const homeEl = document.getElementById("screen-home");
        homeEl.classList.remove("hidden");
        homeEl.classList.remove("view-enter");
        void homeEl.offsetWidth;
        homeEl.classList.add("view-enter");
        requestAnimationFrame(drawHomeStage);
    });
});

requestAnimationFrame(drawHomeStage);