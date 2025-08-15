let playTimes = 1;

const btn = document.getElementById('toggleClock');
const clockElapsed = document.getElementById('clock');
const gameContainer = document.getElementById('game');

let moveCount = 0;
let minutes = 0;
let seconds = 0;

let startTime = null;
let timer = null;

const rows = 3;
const cols = 4;
let blackPos = { r: 2, c: 3 }; // black tile start position
let gameStarted = false;
let isWin = false;

// Create initial grid layout
function createInitialGrid() {
    const boxes = Array.from(gameContainer.children);
    boxes.forEach((box, index) => {
        let r = Math.floor(index / cols);
        let c = index % cols;
        box.dataset.row = r;
        box.dataset.col = c;
    });
}

// Swap two tiles
function swapTiles(r1, c1, r2, c2) {
    const box1 = Array.from(gameContainer.children)
        .find(b => b.dataset.row == r1 && b.dataset.col == c1);
    const box2 = Array.from(gameContainer.children)
        .find(b => b.dataset.row == r2 && b.dataset.col == c2);

    // swap positions
    let tempR = box1.dataset.row, tempC = box1.dataset.col;
    box1.dataset.row = box2.dataset.row;
    box1.dataset.col = box2.dataset.col;
    box2.dataset.row = tempR;
    box2.dataset.col = tempC;

    // visually swap
    const allBoxes = Array.from(gameContainer.children);
    gameContainer.innerHTML = '';
    allBoxes.sort((a, b) => (a.dataset.row * cols + +a.dataset.col) - (b.dataset.row * cols + +b.dataset.col))
        .forEach(b => gameContainer.appendChild(b));
}

// Shuffle grid
function shuffle(times) {
    for (let i = 0; i < times; i++) {
        let moves = [];
        if (blackPos.r > 0) moves.push({ r: blackPos.r - 1, c: blackPos.c });
        if (blackPos.r < rows - 1) moves.push({ r: blackPos.r + 1, c: blackPos.c });
        if (blackPos.c > 0) moves.push({ r: blackPos.r, c: blackPos.c - 1 });
        if (blackPos.c < cols - 1) moves.push({ r: blackPos.r, c: blackPos.c + 1 });

        let move = moves[Math.floor(Math.random() * moves.length)];
        swapTiles(blackPos.r, blackPos.c, move.r, move.c);
        blackPos = move;
    }
}

// Check if puzzle is in correct order
function checkWin() {
    const boxes = Array.from(gameContainer.children);
    for (let i = 0; i < boxes.length - 1; i++) {
        if (boxes[i].textContent.trim() != (i + 1)) {
            return false;
        }
    }
    return true;
}

// Handle keyboard controls
document.addEventListener('keydown', (e) => {
    if (!gameStarted) return;

    let move = null;
    if (e.key === 'w' || e.key === 'ArrowUp') move = { r: blackPos.r - 1, c: blackPos.c };
    if (e.key === 's' || e.key === 'ArrowDown') move = { r: blackPos.r + 1, c: blackPos.c };
    if (e.key === 'a' || e.key === 'ArrowLeft') move = { r: blackPos.r, c: blackPos.c - 1 };
    if (e.key === 'd' || e.key === 'ArrowRight') move = { r: blackPos.r, c: blackPos.c + 1 };

    if (move && move.r >= 0 && move.r < rows && move.c >= 0 && move.c < cols) {
        swapTiles(blackPos.r, blackPos.c, move.r, move.c);
        blackPos = move;
        moveCount++;

        if (checkWin()) {
            isWin = true;
            document.getElementById("announce").textContent = "You win!";
            btn.click(); // end game
        }
    }
});

btn.addEventListener('click', () => {
    if (btn.classList.contains('start')) {
        // Start game
        document.getElementById("announce").textContent = "";
        moveCount = 0;
        isWin = false;
        gameStarted = true;

        createInitialGrid();
        shuffle(100);

        btn.textContent = 'Kết thúc';
        btn.classList.remove('start');
        btn.classList.add('end');

        startTime = Date.now();
        timer = setInterval(() => {
            let elapsed = Date.now() - startTime;
            minutes = String(Math.floor(elapsed / 60000)).padStart(2, '0');
            seconds = String(Math.floor((elapsed % 60000) / 1000)).padStart(2, '0');
            clockElapsed.innerHTML = `Đồng hồ <br><br> ${minutes}:${seconds}`;
            clockElapsed.style.whiteSpace = "pre-line";
        }, 1000);

    } else {
        gameStarted = false;
        clearInterval(timer);

        let tableBody = document.querySelector("#scoreBoard tbody");
        let newRow = tableBody.insertRow();

        let SoLanChoi = newRow.insertCell(0);
        let buocDi = newRow.insertCell(1);
        let thoiGian = newRow.insertCell(2);

        SoLanChoi.textContent = playTimes;
        buocDi.textContent = moveCount;
        thoiGian.innerHTML = `${minutes}:${seconds}`;

        playTimes++;

        btn.textContent = 'Bắt đầu';
        btn.classList.remove('end');
        btn.classList.add('start');
        clockElapsed.innerHTML = 'Đồng hồ <br><br> 00:00';
      
      }
    }
);
