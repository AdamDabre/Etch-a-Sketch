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
let rows = 6;
let columns = 6;
createGrid(rows, columns);