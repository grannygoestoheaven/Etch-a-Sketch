const SQUARECOUNT = 256;

function createMultipleDivs()
{
    for(i = 0; i < SQUARECOUNT; i++)
    {
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('square');
        grid.append(squareDiv);
    }
}

const grid = document.createElement('div');
grid.classList.add('grid');
document.body.append(grid);

createMultipleDivs();