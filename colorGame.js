let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setupButtons();
    setupSquares();
    reset();
}

function setupButtons() {
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === "Easy") {
                numSquares = 3;
            }
            else {
                numSquares = 6;
            }
            reset();
        });
    }
}

function setupSquares() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];

        squares[i].addEventListener("click", function () {
            let clickedColor = this.style.backgroundColor;

            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!"
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?";

            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        });
    }
}

function reset() {
    colors = generateRandomColors(numSquares);

    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors"

    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }

        else
            squares[i].style.display = "none";
    }
    h1.style.backgroundColor = "steelblue";
}

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(number) {
    let arr = [];

    for (let i = 0; i < number; i++) {
        arr.push(randomColor());
    }

    return arr;
}

function randomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

resetButton.addEventListener("click", function () {
    reset();
})