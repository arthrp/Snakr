enum Direction {
    Up,
    Down,
    Left,
    Right
}

class Snake {
    public cellX: number[] = [];
    public cellY: number[] = [];
    private readonly _cellSideSize = 10;

    constructor(private _cellCount: number){
        const w = this._cellSideSize;

        for(let i = 0; i < _cellCount; i++){
            this.cellX[i] = 50 - i * w;
            this.cellY[i] = 50;
        }
    }

    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "rgba(255,0,0,0.5)";
        const s = this._cellSideSize;

        for(let i = 0; i < this._cellCount; i++){
            ctx.fillRect(this.cellX[i],this.cellY[i],s,s);
        }
    }

    public move(dir: Direction): void {
        const cs = this._cellSideSize;

        for(let i = this._cellCount; i > 0; i--){
            this.cellX[i] = this.cellX[i-1];
            this.cellY[i] = this.cellY[i-1];
        }

        if(dir === Direction.Left){
            this.cellX[0] -= cs;
        }
        else if(dir === Direction.Right){
            this.cellX[0] += cs;
        }
        else if(dir === Direction.Up){
            this.cellY[0] -= cs;
        }
        else if(dir === Direction.Down){
            this.cellY[0] += cs;
        }
    }
}