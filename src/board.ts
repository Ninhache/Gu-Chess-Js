import {parseFEN} from "./utils";


export class Board {

    private score: Number | null;


    constructor(fen: String = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1") {
        this.score = null;

        this.setupPieces(fen);
    }


    setupPieces(fen: String) {
        const { board } = parseFEN(fen);

        console.log(board)
    }

}