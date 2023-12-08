import {ChessPiece} from "../pieces/pieces";

export class Square {
    row: number;
    column: number;
    piece: ChessPiece | null;

    constructor(row: number, column: number, piece: ChessPiece | null = null) {
        this.row = row;
        this.column = column;
        this.piece = piece;
    }

    setPiece(piece: ChessPiece | null): void {
        this.piece = piece;
    }

    getPiece(): ChessPiece | null {
        return this.piece;
    }

}
