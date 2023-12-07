import {parseFEN} from "./utils";


export class Board {

    private score: Number | null;


    constructor(fen: String = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1") {
        this.score = null;

        this.setupPieces(fen);
    }
    setupPieces(fen: String): void {
        const { board } = parseFEN(fen);

        console.log(board)
    }

    draw(canvas: HTMLCanvasElement) {
        const tileSize = 64;

        const context = canvas.getContext("2d");

        if (!context) throw new Error(`2D Context cannot be used ${context}`);


        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 == 0) {
                    context.fillStyle = "white";
                } else {
                    context.fillStyle = "black";
                }

                context.fillRect(i * tileSize, j * tileSize, tileSize, tileSize);
            }
        }
    }

}