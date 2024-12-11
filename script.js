// Import the sudoku-gen package
import { getSudoku } from 'sudoku-gen';

let numSelected = null;
let tileSelected = null;
let errors = 0;

// Generating puzzle and solution using the sudoku-gen package
const { puzzle, solution } = getSudoku('easy');

// Converting the puzzle string to a 2D array format for easier processing
let board = Array.from({ length: 9 }, (_, i) => {
    return puzzle.slice(i * 9, (i + 1) * 9).split("").map(char => (char === "-" ? "-" : char));
});

window.onload = function() {
    setGame();
};

function setGame() {
    for (let i = 1; i <= 9; i++) {
        let number = document.createElement("div");
        number.id = i;
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    // BOARD: 9x9
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if (board[r][c] !== "-") {
                tile.innerText = board[r][c];
                tile.classList.add("tile-start");
            }
            if (r === 2 || r === 5) {
                tile.classList.add("horizontal-line");
            }
            if (c === 2 || c === 5) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }

    // Adding a Solve button
    let solveButton = document.createElement("button");
    solveButton.id = "solve-button";
    solveButton.innerText = "Solve";
    solveButton.addEventListener("click", solveSudoku);
    document.body.appendChild(solveButton);
}

function selectNumber() {
    if (numSelected !== null) {
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}

function selectTile() {
    if (numSelected) {
        if (this.innerText !== "") {
            return;
        }
        let coords = this.id.split("-");
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);
        
        // Checking the solution by comparing the selected number to the solution
        if (solution[r * 9 + c] === numSelected.id) {
            this.innerText = numSelected.id;
        } else {
            errors += 1;
            document.getElementById("errors").innerText = errors;
        }
    }
}

function solveSudoku() {
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            tile.innerText = solution[r * 9 + c];
        }
    }
}
