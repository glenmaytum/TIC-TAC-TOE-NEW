const board = document.querySelector(".game-container") as HTMLElement;

function main(): void {
  createBoard();
}

function createBoard(): void {
  for (let i = 0; i < 9; i++) {
    makeBox(i);
  }
}

function makeBox(i: number): void {
  const box: HTMLDivElement = document.createElement("div");

  box.className = "box";
  box.id = `box-${i}`;
  box.textContent = "X";

  board.append(box);
}

main();
