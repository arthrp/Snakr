const canvas = document.querySelector("#main-canv");
const gameManager = new GameManager(canvas);
gameManager.launch();
document.addEventListener("keydown", (e) => gameManager.handleKeyDown(e));
//# sourceMappingURL=main.js.map