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
    while (grid.lastChild) {
        grid.removeChild(grid.lastChild);
    };
})

button.addEventListener('click', () => {
    let squarecount;
    let userEntry = prompt("Choose number of squares per side (max 100) :");
    
    createGridOfSquares();
    
    function createGridOfSquares()
    {
        squarecount = (userEntry * userEntry);
        grid.style.gridTemplateColumns = `repeat(${userEntry}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${userEntry}, 1fr)`;
    
        //let's fill the grid
        for(i = 0; i < squarecount; i++)
        {
            const squareDiv = document.createElement('div');
            squareDiv.classList.add('square');
            grid.append(squareDiv);
        }
    }
});

