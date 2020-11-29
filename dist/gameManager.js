class GameManager {
    constructor(_canvas) {
        this._canvas = _canvas;
        this._direction = Direction.Right;
        this._isGameOver = false;
        this._ctx = _canvas.getContext("2d");
        this._snake = new Snake(3);
    }
    launch() {
        setInterval(() => this.runGameCycle(), 100);
    }
    handleKeyDown(ev) {
        console.log(ev.key);
        if (ev.key === "ArrowRight" && this._direction !== Direction.Left) {
            this._direction = Direction.Right;
        }
        else if (ev.key === "ArrowLeft" && this._direction !== Direction.Right) {
            this._direction = Direction.Left;
        }
        else if (ev.key === "ArrowUp" && this._direction !== Direction.Down) {
            this._direction = Direction.Up;
        }
        else if (ev.key === "ArrowDown" && this._direction !== Direction.Up) {
            this._direction = Direction.Down;
        }
    }
    runGameCycle() {
        if (this._isGameOver) {
            this.printGameOverMessage();
            return;
        }
        this.checkCollision();
        this._snake.move(this._direction);
        this.draw();
    }
    printGameOverMessage() {
        const ctx = this._ctx;
        const canv = this._canvas;
        ctx.fillStyle = "#FFF";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        ctx.font = "bold 36px Serif";
        ctx.fillText("Game over!", canv.width / 2, canv.height / 2);
    }
    checkCollision() {
        if (this._snake.cellX[0] > this._canvas.width ||
            this._snake.cellX[0] < 0 ||
            this._snake.cellY[0] > this._canvas.height ||
            this._snake.cellY[0] < 0) {
            this._isGameOver = true;
        }
    }
    draw() {
        const ctx = this._ctx;
        ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
        this._snake.draw(ctx);
    }
}
//# sourceMappingURL=gameManager.js.map