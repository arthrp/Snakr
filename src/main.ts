const canvas = document.querySelector("#main-canv") as HTMLCanvasElement;
const gameManager = new GameManager(canvas);

gameManager.launch();

document.addEventListener("keydown", (e) => gameManager.handleKeyDown(e));