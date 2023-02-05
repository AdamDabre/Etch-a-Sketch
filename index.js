//using a double for loop to create a grid of divs per collum per row
function createGrid(squareSide) {
    let box = document.querySelector("#mainBox")
    let container = document.querySelector("#container");

    for (let i = 0; i < squareSide; i++) {
        let column = document.createElement('div'); //creates a column to be used
        column.className = "column";


        for (let j = 0; j < squareSide; j++) {
            let row = document.createElement("div");
            row.className = "rows";
            column.appendChild(row);
        }
        container.appendChild(column);
    }
    box.appendChild(container);
}


// The values of rows and colllums determine how many "pixels" the canvas will have length and witdth wise
let squareSide = 32;
createGrid(squareSide);
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


const eraserBtn = document.querySelector("#eraserBtn");
let eraserMode = false;
eraserBtn.addEventListener('click', () => {
    eraserMode = !eraserMode;
    if (eraserMode) {
        eraserBtn.style.backgroundColor = "grey";

        squares.forEach(square => {
            square.addEventListener('mousedown', () => {
                isMouseDown = true;
            });
            square.addEventListener('mouseup', () => {
                isMouseDown = false;
            });
            square.addEventListener('mouseenter', () => {
                if (isMouseDown && eraserMode) {
                    square.style.background = "#FFFFFF";
                }
            });
        });
    } else {

        eraserBtn.style.backgroundColor = "White";

    }
});


