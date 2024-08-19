let gridContainer = document.getElementById("etch-container");
const newGridButton = document.getElementById("new-grid-button");
createGrid(16);

function createGrid(gridCount) {
    gridContainer.remove();
    gridContainer = document.createElement("div");
    gridContainer.id = "etch-container"; 
    document.body.appendChild(gridContainer);

    for(let i = 0; i < gridCount; i++) {
        let newRow = document.createElement("div");
        newRow.classList.add("grid-rows");
        gridContainer.appendChild(newRow);
        for(let j = 0; j < gridCount; j++) {
            let newGrid = document.createElement("div");
            newGrid.classList.add("individual-grids");
            newGrid.addEventListener("mouseover",  (event) => {
                let randomRed = Math.floor(Math.random() * 256);
                let randomGreen = Math.floor(Math.random() * 256);  
                let randomBlue = Math.floor(Math.random() * 256);  
                newGrid.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;             
            });
            newRow.appendChild(newGrid);
        }
    }
};

function newGridRequest() {
    let gridCount = prompt("Insert the number of squares per side for the new grid");
    while (gridCount <= 0 || gridCount >= 100) {
        gridCount = prompt("Please insert a number greater than 0 and less than 100"); 
    }
    createGrid(gridCount);
}

newGridButton.addEventListener("click", newGridRequest);