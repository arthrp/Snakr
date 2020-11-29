class GameManager {
    private readonly _snake: Snake;
    private readonly _ctx: CanvasRenderingContext2D;
    private _direction = Direction.Right;
    private _isGameOver = false;

    constructor(private readonly _canvas: HTMLCanvasElement){
        this._ctx = _canvas.getContext("2d");
        this._snake = new Snake(3);
    }

    public launch(): void {
        setInterval(() => this.runGameCycle(), 100);
    }

    public handleKeyDown(ev: KeyboardEvent): void {
        console.log(ev.key);

        if(ev.key === "ArrowRight" && this._direction !== Direction.Left){
            this._direction = Direction.Right;
        }
        else if(ev.key === "ArrowLeft" && this._direction !== Direction.Right){
            this._direction = Direction.Left;
        }
        else if(ev.key === "ArrowUp" && this._direction !== Direction.Down){
            this._direction = Direction.Up;
        }
        else if(ev.key === "ArrowDown" && this._direction !== Direction.Up){
            this._direction = Direction.Down;
        }
    }

    private runGameCycle(): void {
        if(this._isGameOver){
            this.printGameOverMessage();
            return;
        }

        this.checkCollision();
        this._snake.move(this._direction);
        this.draw();
    }

    private printGameOverMessage(): void {
        const ctx = this._ctx;
        const canv = this._canvas;

        ctx.fillStyle = "#FFF";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        ctx.font = "bold 36px Serif";
        ctx.fillText("Game over!", canv.width/2, canv.height/2);
    }

    private checkCollision(): void {
        if(this._snake.cellX[0] > this._canvas.width || 
            this._snake.cellX[0] < 0 ||
            this._snake.cellY[0] > this._canvas.height ||
            this._snake.cellY[0] < 0){
                this._isGameOver = true;
            }
    }

    private draw(): void {
        const ctx = this._ctx;

        ctx.clearRect(0,0,this._canvas.width,this._canvas.height);
        this._snake.draw(ctx);
    }
}