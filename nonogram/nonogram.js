// puzzle X, remember to set the targetSVG

// variables below are instantiated in the pday.js file
// they are used to allow user to 'enter' an answer using the on screen number buttons
targetSVG = 'svg#puzzle9';

const ANSWERS = [[[1,1,1,1,1],
                  [0,1,0,1,0],
                  [0,1,0,1,0],
                  [0,1,0,1,0],
                  [0,1,0,1,0]],

                 [[0,0,0,0,0,0,0,0,0,0],
                  [0,1,1,1,0,0,1,1,1,0],
                  [0,1,0,0,1,0,0,1,0,0],
                  [0,1,0,0,1,0,0,1,0,0],
                  [0,1,1,1,0,0,0,1,0,0],
                  [0,1,0,0,0,0,0,1,0,0],
                  [0,1,0,0,0,0,0,1,0,0],
                  [0,1,0,0,0,0,0,1,0,0],
                  [0,1,0,0,0,0,1,1,1,0],
                  [0,0,0,0,0,0,0,0,0,0]],

                 [[0,0,0,0,0,1,1,1,1,1,1,1,1,0,0],
                  [0,0,0,0,1,0,0,0,0,0,0,0,1,1,0],
                  [0,0,0,1,0,1,1,0,0,0,0,0,0,1,1],
                  [0,0,1,0,1,0,0,1,0,0,0,0,0,0,1],
                  [0,0,1,0,1,0,0,1,0,0,0,0,0,0,1],
                  [0,1,1,1,1,1,1,1,1,1,0,0,0,0,1],
                  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                  [0,0,1,1,1,0,0,1,1,1,0,1,1,1,1],
                  [0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
                  [0,0,1,0,0,0,0,0,0,0,0,0,1,0,1],
                  [0,0,0,1,0,1,1,1,0,0,0,0,1,1,1],
                  [0,0,0,1,0,0,0,0,0,0,0,1,1,0,1],
                  [0,0,1,0,1,0,0,0,0,1,1,1,0,1,1],
                  [0,0,1,1,0,1,1,1,1,1,1,0,1,1,1]]];

const COLUMN_PATTERNS = [[[1], [5], [1], [5], [1]],
                         [[0], [8], [1, 1], [1, 1], [2], [0], [1, 1], [8], [1, 1], [0]],
                         [[2], [1, 1], [3, 4, 2], [1, 1, 2, 2, 1], [1, 3, 2, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 3, 2, 1, 1], [1, 1, 2, 1], [1, 1, 2, 2], [1, 1, 2], [1, 2, 2], [2, 2, 3, 1], [2, 2, 1, 2], [13]]];

const ROW_PATTERNS = [[[5], [1, 1], [1, 1], [1, 1], [1, 1]],
                      [[0], [3, 3], [1, 1, 1], [1, 1, 1], [3, 1], [1, 1], [1, 1], [1, 1], [1, 3], [0]],
                      [[8], [1, 2], [1, 2, 2], [1, 1, 1, 1], [1, 1, 1, 1], [9, 1], [1, 1], [15], [3, 3, 4], [1, 1], [1, 1, 1], [1, 3, 3], [1, 2, 1], [1, 1, 3, 2], [2, 6, 3]]];

const SQUARE_SIZE = 24;

let squareColors = ["#ffffff;","#2c2c2c","#2c2c2c","#5f5f5f","#f47474","#e85757"];

let level = 0;
let userGrid;

$(document).ready(function () {
    'use strict';
});

function btnStartClicked(evt) {
  $('#btn-start').removeClass('clickable');
  $('#btn-start').addClass('notclickable');
  $('#btn-start').attr('onclick','');
  fadeOutGenericObject('#btn-start', 100);
  fadeOutGenericObject('#nonogram-sample', 200);
  fadeOutGenericObject('#txt-14', 300);
  fadeOutGenericObject('#txt-13', 400);
  fadeOutGenericObject('#txt-12', 500);
  fadeOutGenericObject('#txt-11', 600);
  fadeOutGenericObject('#txt-10', 700);
  fadeOutGenericObject('#txt-09', 800);
  fadeOutGenericObject('#txt-08', 900);
  fadeOutGenericObject('#txt-07', 1000);
  fadeOutGenericObject('#txt-06', 1100);
  fadeOutGenericObject('#txt-05', 1200);
  fadeOutGenericObject('#txt-04', 1300);
  fadeOutGenericObject('#txt-03', 1400);
  fadeOutGenericObject('#txt-02', 1500);
  fadeOutGenericObject('#txt-01', 1600);
  setTimeout(function(){
    revealQuestion();
  }, 1600);
}

function revealQuestion() {
  $('#txt-01').html('Level 1: Easy');
  fadeInGenericObject('#txt-01', 1000);
  setTimeout(function(){
    initializeLevel();
  }, 1000);
}

function checkAnswer() {
  const answerGrid = ANSWERS[level];

  for (let row = 0; row < answerGrid.length; row++) {
    for (let column = 0; column < answerGrid.length; column++) {
      if (userGrid[row][column] != answerGrid[row][column]) {
        return false;
      }
    }
  }

  return true;
}

function getMaxLength(twoDimArray) {
  let max = 0;

  for (let i = 0; i < twoDimArray.length; i++) {
    if (twoDimArray[i].length > max) {
      max = twoDimArray[i].length;
    }
  }

  return max;
}

function initializeLevel() {
  let size = ANSWERS[level].length;

  /*
   * Step 1: Initialize the user's grid
   */
  userGrid = [];

  for (let row = 0; row < size; row++) {
    let gridRow = [];
    for (let column = 0; column < size; column++) {
      gridRow.push(0);
    }
    userGrid.push(gridRow);
  }

  // log("userGrid = " + userGrid);

  /*
   * Step 2: Draw the board
   */
  let g = document.getElementById('nonogram' + level);
  $(g).attr("visibility", "hidden");
  

  let x = (800 - size * SQUARE_SIZE) / 2;  
  let y = 200;

  // Column patterns
  let columnPatterns = COLUMN_PATTERNS[level];
  let height = getMaxLength(columnPatterns) * SQUARE_SIZE + SQUARE_SIZE / 4;
  for (let column = 0; column < size; column++) {
    let rectangle = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

    rectangle.setAttribute('x', x + SQUARE_SIZE * column);
    rectangle.setAttribute('y', y - height);
    rectangle.setAttribute('width', SQUARE_SIZE);
    rectangle.setAttribute('height', height);
    rectangle.setAttribute('class', 'square-white');

    g.appendChild(rectangle);

    for (let i = 0; i < columnPatterns[column].length; i++) {
      let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');

      text.setAttribute('x', x + SQUARE_SIZE * column + SQUARE_SIZE / 3);
      text.setAttribute('y', y - 5 - SQUARE_SIZE * i);
      text.setAttribute('class', 'pattern-text');
      // NOTE: We read through this array BACKWARDS since we write values bottom to top
      text.textContent = columnPatterns[column][columnPatterns[column].length - 1 - i];

      g.appendChild(text);
    }
  }

  // Row patterns (displayed within the main grid loops)
  let rowPatterns = ROW_PATTERNS[level];
  let width = getMaxLength(rowPatterns) * SQUARE_SIZE + SQUARE_SIZE / 4;

  // Main grid
  for (let row = 0; row < size; row++) {
    // Pattern
    let rectangle = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

    rectangle.setAttribute('x', x - width);
    rectangle.setAttribute('y', y + SQUARE_SIZE * row);
    rectangle.setAttribute('width', width);
    rectangle.setAttribute('height', SQUARE_SIZE);
    rectangle.setAttribute('class', 'square-white');

    g.appendChild(rectangle);

    for (let i = 0; i < rowPatterns[row].length; i++) {
      let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');

      text.setAttribute('x', x - 17 - SQUARE_SIZE * i);
      text.setAttribute('y', y + 17 + SQUARE_SIZE * row);
      text.setAttribute('class', 'pattern-text');
      // NOTE: We read through this array BACKWARDS since we write values right to left
      text.textContent = rowPatterns[row][rowPatterns[row].length - 1 - i];

      g.appendChild(text);
    }

    // Clickable squares
    for (let column = 0; column < size; column++) {
      let square = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

      square.setAttribute('id', 'sq-' + level + '-' + row + '-' + column);
      square.setAttribute('x', x + SQUARE_SIZE * column);
      square.setAttribute('y', y + SQUARE_SIZE * row);
      square.setAttribute('width', SQUARE_SIZE);
      square.setAttribute('height', SQUARE_SIZE);
      square.setAttribute('class', 'square-white clickable');
      square.setAttribute('onclick', 'toggleSquare(' + row + ',' + column + ')');

      g.appendChild(square);
    }
  }
  fadeInGenericObject(g,2000);
  // log("ANSWERS = " + ANSWERS[level]);
}

function toggleSquare(row, column){
  let square = $('#sq-' + level + '-' + row + '-' + column);

  if (square.hasClass('square-white')) {
    square.removeClass('square-white');
    square.addClass('square-black');
    userGrid[row][column] = 1;
  } else if (square.hasClass('square-black')) {
    square.removeClass('square-black');
    square.addClass('square-red');
    userGrid[row][column] = 0;
  } else {
    square.removeClass('square-red');
    square.addClass('square-white');
    userGrid[row][column] = 0;
  }

  // TODO: Work on the animation (fade out the old board/fade in the new board) and messaging
  if (checkAnswer()) {
    log('Solved!');
    level++;
    if (level == 3) {
      $('#txt-01').removeClass("fbluedark");
      $('#txt-01').addClass("f09");
      $('#txt-01').html('Welcome to Nonogram Manor');
      $("#txt-21").html("Special thanks to high school juniors, Jeremy L and Noah B, for puzzle development.");
      $('#nonogroup2').velocity({x:90, y:270, scale:0.5}, {duration: 2000, easing: 'easeOutQuart'});
      $('#txt-15').velocity({x:200}, {duration: 2000, easing: 'easeOutQuart'});
      setTimeout(function(){
        moveTime();
        $('#txt-16').velocity({x:530}, {duration: 1000, easing: 'easeOutQuart'});
        $('#txt-17').velocity({x:530}, {duration: 1000, easing: 'easeOutQuart'});
      }, 2000);
    } else {
      // var nonElId = '#nonogram' + (level - 1);
      // fadeOutGenericObject(nonElId,1500);
      if (level == 1) {
        $('#nonogroup0').velocity({x:1360, y:100, scale:0.5}, {duration: 2000, easing: 'easeOutQuart'});
        setTimeout(function(){
          $('#txt-01').html('Level 2: Medium');
        }, 2000);
      } else {
        $('#nonogroup1').velocity({x:1300, y:380, scale:0.5}, {duration: 2000, easing: 'easeOutQuart'});
        setTimeout(function(){
          $('#txt-01').html('Level 3: Difficult');
        }, 2000);
      }
      setTimeout(function() { initializeLevel(); }, 1500);
    }
  }
}

function moveTime() {
  // user must have solved the puzzle, therefore we move the clock onto the screen
  moveClock(530, 270, 1000, targetSVG);
}