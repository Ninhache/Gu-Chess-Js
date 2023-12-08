import {Square} from "./square";
import {parseFEN} from "../utils";

export class ChessBoard {
    private squares: Square[][];

    constructor() {
        this.squares = Array.from({ length: 8 }, (_, row) =>
            Array.from({ length: 8 }, (_, column) => new Square(row, column))
        );
    }

    public initializeBoard(fen: string = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"): void {
        const { board } = parseFEN(fen);

        console.log(board)
    }

    public getSquare(row: number, column: number): Square {
        return this.squares[row][column];
    }

    // utils methods for move validation, check/checkmate, ....
}
