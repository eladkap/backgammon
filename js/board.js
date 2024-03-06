class Board {
    constructor() {
        this.checkers = [];
    }

    display() {
        let canvasRect = canvas.getBoundingClientRect();
        console.log(canvasRect);
        let x = canvasRect.left;
        let y = canvasRect.y;
        let triangleWidth = canvasRect.width / 12;
        let triangleHeight = canvasRect.height / 3;
        ctx.strokeStyle = 'white';
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x + triangleWidth, y + triangleHeight);
        ctx.moveTo(x + triangleWidth, y + triangleHeight);
        ctx.lineTo(x + 2 * triangleWidth, y);
        ctx.stroke();
    }
}