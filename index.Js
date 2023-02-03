function createGrid(rowsAmount, columnsAmount) {
    let container = document.querySelector("#container");

    for (let i = 0; i < columnsAmount; i++) {
        let column = document.createElement('div'); //creates a column to be used
        column.className = "column";


        for (let j = 0; j < rowsAmount; j++) {
            let row = document.createElement("div");
            row.className = "rows";
            column.appendChild(row);
        }
        container.appendChild(column);
    }
    document.body.appendChild(container);
}



let rows = 32;
let columns = 32;
createGrid(rows, columns);
const squares = document.querySelectorAll(".rows");
squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.style.background = "black";
    })
    square.addEventListener("mousedown", () => {
        square.style.background = "black";
    })
})