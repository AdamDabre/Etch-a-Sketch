//using a double for loop to create a grid of divs per collum per row
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


// The values of rows and colllums determine how many "pixels" the canvas will have length and witdth wise
let rows = 8;
let columns = 8;
createGrid(rows, columns);
const squares = document.querySelectorAll(".rows");
const colorPicker = document.querySelector("#color-picker");
let isMouseDown = false;
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        isMouseDown = true;
    });
    square.addEventListener('mouseup', () => {
        isMouseDown = false;
    });
    square.addEventListener('mouseenter', () => {
        if (isMouseDown) {
            square.style.background = colorPicker.value;
        }
    });
});

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener('click', () => {
    squares.forEach(square => {
        square.style.background = "white";
    })
});

const eraser = document.querySelector("#eraser");
let savedColor;

eraser.addEventListener("click", () => {
    savedColor = colorPicker.value;
    colorPicker.value = "#FFFFFF";
});

colorPicker.addEventListener("input", () => {
    if (colorPicker.value === "#FFFFFF") {
        colorPicker.value = savedColor;
    }
});
