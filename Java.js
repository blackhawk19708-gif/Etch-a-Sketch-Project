const container = document.querySelector(".container")
const sizeButton = document.querySelector("#sizeButton")


const input = document.querySelector("#user-input")

sizeButton.addEventListener("click", function() {
    let gridSize = input.value
    
    if (gridSize > 100) {
        alert("Exceeds limit. Please put in another value.")
    } else {
        createGrid(gridSize)
    }
})




function createGrid(n) {
    container.innerHTML = ""
    const cellSize = 560 / n
    for (let i = 0; i < n * n; i++) {
        const cell = document.createElement("div")
        cell.classList.add("grid-cell")
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        cell.addEventListener("mouseenter", function() {
            cell.style.backgroundColor = "#b92424"
            cell.classList.add("colored")
        })
    
        container.appendChild(cell)

    }
}

const clrBtn = document.querySelector("#clearButton");

clrBtn.addEventListener("click", function() {
    const cells = document.querySelectorAll(".grid-cell"); 
    
    cells.forEach(cell => {
        cell.style.backgroundColor = ''
        cell.classList.remove("colored")
    });
}) 


createGrid(input)