enum Direction {
    Up,
    Down,
    Left,
    Right
}

class Snake {
    public cellX: number[] = [];
    public cellY: number[] = [];

    constructor(private _cellCount: number, private readonly _cellSideSize: number){
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

        //Move the rest of the snake
        for(let i = this._cellCount; i > 0; i--){
            this.cellX[i] = this.cellX[i-1];
            this.cellY[i] = this.cellY[i-1];
        }

        //Move head
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

    public hasSelfCollided(): boolean {
        const count = this._cellCount;
        const cX = this.cellX;
        const cY = this.cellY;
        if(count <= 4){
            return false;
        }

        for(let i = count; i > 0; i--){
            if(cX[i] === cX[0] && cY[0] === cY[i]){
                return true;
            }
        }

        return false;
    }

    public addCell(): void {
        this._cellCount++;
    }
}

class Apple {
    constructor(private readonly _cellSideSize: number, public readonly x: number, public readonly y: number) {}

    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "rgba(0,250,0,0.7)";
        ctx.fillRect(this.x,this.y,this._cellSideSize,this._cellSideSize);
    }
}

class RandomHelper {
    public get(max: number): number {
        let result = Math.floor(Math.random() * max);
        return result;
    }
}