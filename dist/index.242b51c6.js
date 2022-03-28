const board = document.querySelector(".game-container");
function main() {
    createBoard();
}
function createBoard() {
    for(let i = 0; i < 9; i++)makeBox(i);
}
function makeBox(i) {
    const box = document.createElement("div");
    box.className = "box";
    box.id = `box-${i}`;
    box.textContent = "X";
    board.append(box);
}
main();

//# sourceMappingURL=index.242b51c6.js.map
