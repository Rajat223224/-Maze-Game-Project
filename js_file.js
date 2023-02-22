// Define the maze as a 2D array
const maze = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

// Get a reference to the maze element
const mazeElement = document.getElementById('maze');

// Create the maze grid
for (let i = 0; i < maze.length; i++) {
  for (let j = 0; j < maze[i].length; j++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    if (maze[i][j] === 1) {
      cell.style.backgroundColor = 'black';
    }
    mazeElement.appendChild(cell);
  }
}

// Add the start and end cells to the maze
mazeElement.children[11].classList.add('start');
mazeElement.children[98].classList.add('end');

// Define the player's initial position
let playerPosition = 11;

// Get a reference to the player element
const playerElement = document.createElement('div');
playerElement.id = 'player';
mazeElement.children[playerPosition].appendChild(playerElement);

// Handle keyboard input to move the player
document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp
