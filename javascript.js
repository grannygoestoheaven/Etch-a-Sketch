const button = document.createElement('button');
button.textContent = "CLICK ON ME";
button.style.fontFamily = 'impact';
button.style.fontSize = 'x-large';
button.classList.add = 'button';

document.body.append(button);

const grid = document.createElement('div');
grid.classList.add('grid');
document.body.append(grid);

button.addEventListener('click', () => {
   let userEntry = prompt("Choose number of squares per side (max 100) :");
   const SQUARECOUNT = (userEntry * userEntry);
   
   function createGridOfSquares()
   {
       // let's make the grid 
       grid.style.gridTemplateColumns = `repeat(${userEntry}, 1fr)`;
       grid.style.gridTemplateRows = `repeat(${userEntry}, 1fr)`;
       
       //let's fill the grid
       for(i = 0; i < SQUARECOUNT; i++)
       {
           const squareDiv = document.createElement('div');
           squareDiv.classList.add('square');
           grid.append(squareDiv);
       }
   }
   createGridOfSquares();
});

