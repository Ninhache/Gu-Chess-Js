import {parseFEN} from "./utils";
import {TILE_HEIGHT, TILE_WIDTH} from "./config";


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

    initialDraw(canvas: HTMLCanvasElement, fen: string = "") {
        const chessboardElement = document.getElementById('chessboard');

        // draw using svg like chess.com

    }

}
