const boxes = document.querySelectorAll('.box');
const playAgainBtn = document.querySelector('.play-again-btn');
const winnerMessage = document.querySelector('.winner-message')
let player1 = true;
let moves = 0;
let winner = false;
const winningMoves = [
  // horizontal winning moves
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // vertical winning moves
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // diagonal winning moves
  [0, 4, 8],
  [2, 4, 6]
];

for (const box of boxes) {
  box.addEventListener('click', function() {
    if (!winner && box.textContent === '') {
      if (player1) {
        box.textContent = 'X';
        player1 = false;
      } else {
        box.textContent = 'O';
        player1 = true;
      }
      moves++;

      if (moves >= 5) {
        checkWinner();
      }
    }
  });
}

function checkWinner() {
  for (const move of winningMoves) {
    const [a, b, c] = move;
    if (boxes[a].textContent !== '' && 
        boxes[a].textContent === boxes[b].textContent &&
        boxes[b].textContent === boxes[c].textContent) {
      winner = true;
      winnerMessage.textContent = `Parabéns, ${boxes[a].textContent} venceu!`;
      break;
    }
  }
  
  if (!winner && moves === 9) {
    winnerMessage.textContent = `Empate!`;
  }

  if (winner || moves === 9) {
    playAgainBtn.classList.add('show');
  }
}

playAgainBtn.addEventListener('click', function() {
  for (const box of boxes) {
    box.textContent = '';
  }
  player1 = true;
  moves = 0;
  winner = false;
  winnerMessage.textContent = ``;
  playAgainBtn.classList.remove('show');
});