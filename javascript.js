
const container = document.querySelector("#container");
const header = document.querySelector(".header");
let squareCount = 16;
let squareSize = container.width/squareCount;

const button = document.createElement("button");
button.textContent = "Change Grid";
header.append(button);
const buttonSelect = document.querySelector("button");
buttonSelect.addEventListener("click", () => changeGrid());

function generateGrid()
{
    container.innerHTML = "";
    for (row=0; row<squareCount;row++)
    {
        for(column=0; column<squareCount;column++)
        {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.width = squareSize + "px";
        square.style.height = squareSize + "px";
        container.appendChild(square);

        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        });
        }
    }
}

function changeGrid()
{
    squareCount = parseInt(prompt("number of squares in grid: "))
        if (squareCount == isNaN || squareCount > 100 || squareCount < 1)
            alert("Must be a number from 1 to 100");
        else
    {
         squareSize = 960/squareCount;
         generateGrid(squareCount);
    }
    
}
