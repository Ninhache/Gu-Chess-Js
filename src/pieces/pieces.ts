"use strict";

enum Color {
    WHITE,
    BLACK
}

enum PieceType {
    Pawn,
    Rook,
    Knight,
    Bishop,
    Queen,
    King,
}

interface Position {
    x: number;
    y: number;
}

class Pieces {

    private color: Color;
    private type: PieceType;
    private position: Position;

    // todo: implement AI, may add a base value to the enum
    // private baseValue = -1;

    constructor(color: Color, type: PieceType, position: Position) {
        /** 'w' for white, 'b' for black */
        this.color = color; 
        /** 'P', 'R', 'N', 'B', 'Q', 'K' */
        this.type = type; 
        /** e.g., { x: 0, y: 0 } */
        this.position = position; 

        // this.value = -1;
    }


    
    

}