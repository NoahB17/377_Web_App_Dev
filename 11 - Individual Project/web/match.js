const GRID_WIDTH = 8;
const GRID_HEIGHT = 8;
const GEM_TYPES = ['red', 'blue', 'green', 'yellow','purple'];
const SCORE_PER_GEM = 10;

let score = 0;

const grid = document.getElementById('game-grid');

let selectedGem = null;

// Create initial grid
function createGrid() {
  for (let row = 0; row < GRID_HEIGHT; row++) {
    for (let col = 0; col < GRID_WIDTH; col++) {
      const gem = document.createElement('div');
      gem.classList.add('gem');
      gem.dataset.row = row;
      gem.dataset.col = col;
      gem.dataset.type = getRandomGemType();
      gem.style.backgroundColor = gem.dataset.type;
      gem.addEventListener('click', () => selectGem(gem));
      grid.appendChild(gem);
    }
  }
}

// Get a random gem type
function getRandomGemType() {
  return GEM_TYPES[Math.floor(Math.random() * GEM_TYPES.length)];
}

// Select a gem
function selectGem(gem) {
  if (!selectedGem) {
    selectedGem = gem;
    gem.style.border = '2px solid red';
  } else {
    if (gem !== selectedGem) {
      swapGems(selectedGem, gem);
    }
    selectedGem.style.border = 'none';
    selectedGem = null;
  }
}

// Swap two gems
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
  } else {
    // If no match, swap back
    tempType = gem1.dataset.type;
    gem1.dataset.type = gem2.dataset.type;
    gem2.dataset.type = tempType;
    gem1.style.backgroundColor = gem1.dataset.type;
    gem2.style.backgroundColor = gem2.dataset.type;
  }
}

// Check for matches
function checkForMatches() {
    let foundMatch = false;
  
    // Check for horizontal matches
    for (let row = 0; row < GRID_HEIGHT; row++) {
      for (let col = 0; col < GRID_WIDTH - 2; col++) {
        const gem1 = document.querySelector(`[data-row='${row}'][data-col='${col}']`);
        const gem2 = document.querySelector(`[data-row='${row}'][data-col='${col + 1}']`);
        const gem3 = document.querySelector(`[data-row='${row}'][data-col='${col + 2}']`);
  
        if (gem1.dataset.type === gem2.dataset.type && gem2.dataset.type === gem3.dataset.type) {
          gem1.dataset.matched = true;
          gem2.dataset.matched = true;
          gem3.dataset.matched = true;
          foundMatch = true;
        }
      }
    }
  
    // Check for vertical matches
    for (let col = 0; col < GRID_WIDTH; col++) {
      for (let row = 0; row < GRID_HEIGHT - 2; row++) {
        const gem1 = document.querySelector(`[data-row='${row}'][data-col='${col}']`);
        const gem2 = document.querySelector(`[data-row='${row + 1}'][data-col='${col}']`);
        const gem3 = document.querySelector(`[data-row='${row + 2}'][data-col='${col}']`);
  
        if (gem1.dataset.type === gem2.dataset.type && gem2.dataset.type === gem3.dataset.type) {
          gem1.dataset.matched = true;
          gem2.dataset.matched = true;
          gem3.dataset.matched = true;
          foundMatch = true;
        }
      }
    }
  
    return foundMatch;
  }

// Update score
function updateScore() {
  score += SCORE_PER_GEM;
  document.getElementById('score-value').innerText = score;
}

// Update grid
function updateGrid() {
    // Remove matched gems and fill with new gems
    const gems = document.querySelectorAll('.gem');
    gems.forEach(gem => {
      if (gem.dataset.matched) {
        gem.remove();
        score += SCORE_PER_GEM;
        document.getElementById('score-value').innerText = score;
      }
    });
  
    // Fill the grid with new gems to replace the removed ones
    for (let col = 0; col < GRID_WIDTH; col++) {
      const matchedGemsInColumn = document.querySelectorAll(`.gem[data-col='${col}'][data-match='true']`).length;
      for (let row = 0; row < matchedGemsInColumn; row++) {
        const newGem = document.createElement('div');
        newGem.classList.add('gem');
        newGem.dataset.row = row;
        newGem.dataset.col = col;
        newGem.dataset.type = getRandomGemType();
        newGem.style.backgroundColor = newGem.dataset.type;
        newGem.addEventListener('click', () => selectGem(newGem));
        grid.appendChild(newGem);
      }
    }
  
    // Clear matched data attribute
    gems.forEach(gem => delete gem.dataset.matched);
  }
// Initialize the game
createGrid();
