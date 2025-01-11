
const socket = io();
const board = document.getElementById('board');
const cells = document.querySelectorAll('td');
const result = document.getElementById('result');
let currentPlayer = 'X';

// Function to check for a win
function checkWin() {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]          // Diagonals
    ];

    for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        if (cells[a].textContent && 
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent) {
            return cells[a].textContent;
        }
    }

    return null;
}

// Function to handle cell clicks
function handleClick(event) {
    const cell = event.target;

    if (!cell.textContent) {
        cell.textContent = currentPlayer;
        const winner = checkWin();

        if (winner) {
            result.textContent = `Player ${winner} wins!`;
            disableBoard();
        } else if (Array.from(cells).every(cell => cell.textContent)) {
            result.textContent = "It's a draw!";
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            result.textContent = `Player ${currentPlayer}'s turn`;
        }
    }
}

// Function to disable the board after a win or draw
function disableBoard() {
    cells.forEach(cell => cell.removeEventListener('click', handleClick));
}

// Add click event listeners to cells
cells.forEach(cell => cell.addEventListener('click', handleClick));

// Initial message
result.textContent = `Player ${currentPlayer}'s turn`;