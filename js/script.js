// Variables
const theButtons = document.querySelectorAll("#buttonHolder img"),
    puzzleBoard = document.querySelector(".puzzle-board"),
    puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
    dropZones = document.querySelectorAll(".drop-zone"),
    dragZone = document.querySelector(".puzzle-pieces");

// Store the dragged piece in a global variable
let draggedPiece;

// Function to change the background image
function changeBGImage() {
    // Change the background image of the puzzle board
    puzzleBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;
    // Reset the puzzle pieces when a new puzzle is selected
    resetPuzzle();
}

// Function to handle the start of dragging
function handleStartDrag() {
    draggedPiece = this; // Store the dragged piece
}

// Function to handle dragging over a drop zone
function handleDragOver(e) {
    e.preventDefault(); // Allow the drop event to fire
}

// Function to handle dropping a piece into a drop zone
function handleDrop(e) {
    e.preventDefault();
    // Check if the drop zone already has a puzzle piece
    if (this.children.length > 0) {
        alert("Only one piece can be placed in a drop zone!");
        return;
    }
    // Move the dragged piece to the drop zone
    this.appendChild(draggedPiece);
}

// Function to reset the puzzle pieces
function resetPuzzle() {
    // Loop through all drop zones and move pieces back to the drag zone
    dropZones.forEach(zone => {
        while (zone.firstChild) {
            dragZone.appendChild(zone.firstChild);
        }
    });
}

// Event Listeners
theButtons.forEach(button => button.addEventListener("click", changeBGImage));

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));