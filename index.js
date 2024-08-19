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
            newGrid.onmouseover = ("background-color", "black");
            newRow.appendChild(newGrid);
        }
    }
};
