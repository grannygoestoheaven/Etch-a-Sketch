const SQUARECOUNT = 256;

function createMultipleDivs()
{
    for(i = 0; i < SQUARECOUNT; i++)
    {
        const squareDiv = document.createElement('div');
        mainContainer.append(squareDiv);
    }
}

const mainContainer = document.createElement('div');
mainContainer.classList.add('main_container');
document.body.append(mainContainer);

createMultipleDivs();