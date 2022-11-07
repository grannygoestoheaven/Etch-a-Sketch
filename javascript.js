let userEntry = prompt("Choose number of squares per side (max 100) :")
const grid = document.createElement('div');
const SQUARECOUNT = (userEntry * userEntry);

grid.classList.add('grid');
document.body.append(grid);

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