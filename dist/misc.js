var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
class Snake {
    constructor(_cellCount, _cellSideSize) {
        this._cellCount = _cellCount;
        this._cellSideSize = _cellSideSize;
        this.cellX = [];
        this.cellY = [];
        const w = this._cellSideSize;
        for (let i = 0; i < _cellCount; i++) {
            this.cellX[i] = 50 - i * w;
            this.cellY[i] = 50;
        }
    }
    draw(ctx) {
        ctx.fillStyle = "rgba(255,0,0,0.5)";
        const s = this._cellSideSize;
        for (let i = 0; i < this._cellCount; i++) {
            ctx.fillRect(this.cellX[i], this.cellY[i], s, s);
        }
    }
    move(dir) {
        const cs = this._cellSideSize;
        for (let i = this._cellCount; i > 0; i--) {
            this.cellX[i] = this.cellX[i - 1];
            this.cellY[i] = this.cellY[i - 1];
        }
        if (dir === Direction.Left) {
            this.cellX[0] -= cs;
        }
        else if (dir === Direction.Right) {
            this.cellX[0] += cs;
        }
        else if (dir === Direction.Up) {
            this.cellY[0] -= cs;
        }
        else if (dir === Direction.Down) {
            this.cellY[0] += cs;
        }
    }
}
class Apple {
    constructor(_cellSideSize, x, y) {
        this._cellSideSize = _cellSideSize;
        this.x = x;
        this.y = y;
    }
    draw(ctx) {
        ctx.fillStyle = "rgba(0,250,0,0.7)";
        ctx.fillRect(this.x, this.y, this._cellSideSize, this._cellSideSize);
    }
}
class RandomHelper {
    get(max) {
        let result = Math.floor(Math.random() * max);
        return result;
    }
}
//# sourceMappingURL=misc.js.map