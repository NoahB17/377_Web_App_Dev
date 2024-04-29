const GRID_WIDTH = 8;
const GRID_HEIGHT = 8;
const GEM_TYPES = ['red', 'blue', 'green', 'yellow','purple','pink'];
const SCORE_PER_GEM = 10;
let matches = 0;
let score = 0;
let foundMatch = false;

const grid = document.getElementById('game-grid');

let selectedGem = null;

// Create initial grid
function createGrid() {
        // Create a temporary grid to check for initial matches
        
        let tempGrid = [];
        for (let row = 0; row < GRID_HEIGHT; row++) {
            tempGrid[row] = [];
            for (let col = 0; col < GRID_WIDTH; col++) {
                tempGrid[row][col] = getRandomGemType(row, col);
            }
        }

        // Check for initial matches and swap colors if needed
        let matched = true;
        while (matched) {
            matched = false;
            for (let row = 0; row < GRID_HEIGHT; row++) {
                for (let col = 0; col < GRID_WIDTH; col++) {
                    if (checkInitialMatches(tempGrid, row, col)) {
                        matched = true;
                        const temp = tempGrid[row][col];
                        tempGrid[row][col] = tempGrid[row][col + 1];
                        tempGrid[row][col + 1] = temp;
                    }
                    if (checkInitialMatches(tempGrid, row, col)) {
                        matched = true;
                        const temp = tempGrid[row][col];
                        tempGrid[row][col] = tempGrid[row + 1][col];
                        tempGrid[row + 1][col] = temp;
                    }
                }
            }
        }

        // Create gems in the actual grid using the finalized colors
        for (let row = 0; row < GRID_HEIGHT; row++) {
            for (let col = 0; col < GRID_WIDTH; col++) {
                const gem = document.createElement('div');
                gem.classList.add('gem');
                gem.dataset.row = row;
                gem.dataset.col = col;
                gem.dataset.type = tempGrid[row][col];
                gem.style.backgroundColor = tempGrid[row][col];
                gem.addEventListener('click', () => selectGem(gem));
                grid.appendChild(gem);
            }
        }
}

// Check for initial matches
function checkInitialMatches(tempGrid, row, col) {
   if (col < GRID_WIDTH - 2 && tempGrid[row][col] == tempGrid[row][col + 1] && tempGrid[row][col + 1] == tempGrid[row][col + 2]) {
       return true;
   }
   if (row < GRID_HEIGHT - 2 && tempGrid[row][col] == tempGrid[row + 1][col] && tempGrid[row + 1][col] == tempGrid[row + 2][col]) {
       return true;
   }
   return false;
}
// Get a random gem type
function getRandomGemType() {
  return GEM_TYPES[Math.floor(Math.random() * GEM_TYPES.length)];
}
function selectGem(gem) {
    if (!selectedGem) {
        selectedGem = gem;
        gem.style.border = '2px solid black';
    } else {
        if (gem !== selectedGem) {
            swapGems(selectedGem, gem);
        }
        selectedGem.style.border = 'none';
        selectedGem = null; // Reset selectedGem here
    }
}


function swapGems(gem1, gem2) {
  const tempType = gem1.dataset.type;
  gem1.dataset.type = gem2.dataset.type;
  gem2.dataset.type = tempType;
  gem1.style.backgroundColor = gem1.dataset.type;
  gem2.style.backgroundColor = gem2.dataset.type;
  if (checkForMatches()) {
    // If there's a match, update score and grid
    updateScore();
    updateGrid();
    
} 
// else {
//     // If no match, swap back
//     tempType = gem1.dataset.type;
//     gem1.dataset.type = gem2.dataset.type;
//     gem2.dataset.type = tempType;
//     gem1.style.backgroundColor = gem1.dataset.type;
//     gem2.style.backgroundColor = gem2.dataset.type;
//   }
}

function checkForMatches() {
    foundMatch = false;
    // Check for horizontal matches
    for (let row = 0; row < GRID_HEIGHT; row++) {
      for (let col = 0; col < GRID_WIDTH - 2; col++) {
        const gem1 = document.querySelector(`[data-row='${row}'][data-col='${col}']`);
        const gem2 = document.querySelector(`[data-row='${row}'][data-col='${col + 1}']`);
        const gem3 = document.querySelector(`[data-row='${row}'][data-col='${col + 2}']`);

        if (gem1.dataset.type == gem2.dataset.type && gem2.dataset.type == gem3.dataset.type) {
          gem1.dataset.matched = true;
          gem2.dataset.matched = true;
          gem3.dataset.matched = true;
          foundMatch = true;
        }else{  
            foundMatch = false;

        }
      }
    }
  
    // Check for vertical matches
    for (let col = 0; col < GRID_WIDTH; col++) {
      for (let row = 0; row < GRID_HEIGHT - 2; row++) {
        const gem1 = document.querySelector(`[data-row='${row}'][data-col='${col}']`);
        const gem2 = document.querySelector(`[data-row='${row + 1}'][data-col='${col}']`);
        const gem3 = document.querySelector(`[data-row='${row + 2}'][data-col='${col}']`);

        if (gem1.dataset.type == gem2.dataset.type && gem2.dataset.type == gem3.dataset.type) {
          gem1.dataset.matched = true;
          gem2.dataset.matched = true;
          gem3.dataset.matched = true;
          foundMatch = true;
        }
      }
    }
  
    return foundMatch;
  }

function updateScore() {
  score == SCORE_PER_GEM + score;
  document.getElementById('score-value').innerText = score;
}

function updateGrid() {
    // Remove matched gems 
    const gems = document.querySelectorAll('.gem');
    gems.forEach(gem => {
        if (gem.dataset.matched) {
            gem.remove();
            score += SCORE_PER_GEM;
            document.getElementById('score-value').innerText = score;
        }

    });

    // Count the total number of gems
    var totalGems = document.querySelectorAll('.gem').length;


    // FIX CODE BELOW

    // Fill the grid with new gems until the total number reaches 64
    while (totalGems < GRID_WIDTH * GRID_HEIGHT) {
        const newGem = document.createElement('div');
        newGem.classList.add('gem');
        newGem.dataset.row = Math.floor(totalGems / GRID_WIDTH);
        newGem.dataset.col = totalGems % GRID_WIDTH;
        newGem.dataset.type = getRandomGemType();
        newGem.style.backgroundColor = newGem.dataset.type;
        newGem.addEventListener('click', () => selectGem(newGem));
        grid.appendChild(newGem);
        totalGems++;
    }

    // Clear matched data attribute
    gems.forEach(gem => delete gem.dataset.matched);
}
// Initialize the game  

createGrid();
