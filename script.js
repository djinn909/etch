const container = document.getElementById("grid-container");
const resetBtn = document.querySelector("#reset-btn");




let createGrid = (newSize) =>  {
for (let i=0; i< newSize * newSize; i++) {
const cell = document.createElement("div");
cell.className="cell";
cell.addEventListener('mouseover',changeColor);
container.style.gridTemplateColumns = `repeat( ${newSize} ,1fr )`;
container.appendChild(cell);
}}

function changeColor(cell) {
    cell.target.style.backgroundColor= "red";
}


resetBtn.addEventListener('click', resetGrid);

function removeAllchild (parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


function resetGrid () {
removeAllchild(container);
let newSize = prompt("Enter size of grid"); 
createGrid(newSize);
}



