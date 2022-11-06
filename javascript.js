let userEntry = prompt("Enter squared number :")
let squareDiv;
const grid = document.createElement('div');
const SQUARECOUNT = (userEntry * userEntry);

grid.classList.add('grid');
document.body.append(grid);

function createMultipleDivs()
{
    grid.style.gridTemplateColumns = `repeat(${userEntry}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${userEntry}, 1fr)`;

    for(i = 0; i < SQUARECOUNT; i++)
    {
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('square');
        grid.append(squareDiv);
    }
}

createMultipleDivs();