"use strict";

class Pieces {

    constructor(x, y, isWhite) {
        this.x = x;
        this.y = y;
        this.isWhite = isWhite;

        this.taken = false;
        this.value = -1;
    }

    inBounds(x, y) {
        return (x >= 0 && y >= 0 && x < 8 && y < 8);
    }

    move(x, y) {
        let pieces = board.getPieceAt(x, y);

        if (pieces != null) {
            pieces.taken = true;
        }

        this.x = x;
        this.y = y;
    }

    attackAllies(x, y) {
        let pieces = board.getPieceAt(x, y);

        if (pieces != null) {
            return pieces.isWhite === this.isWhite;
        }
        return false;
    }

    moveThroughPieces(x, y) {
        let tempX = x - getX();
        if (tempX > 0) {
            tempX = 1;
        } else if (tempX < 0) {
            tempX = -1;
        }

        let tempY = y - getY();
        if (tempY > 0) {
            tempY = 1;
        } else if (tempY < 0) {
            tempY = -1;
        }

        let tempPos = {x: x, y: y};
        tempPos.x += tempX;
        tempPos.y += tempY;

        while (tempPos.x !== this.x || tempPos.y !== this.y) {
            if (board.getPieceAt(tempPos.x, tempPos.y) != null) {
                return true;
            }

            tempPos.x += tempX;
            tempPos.y += tempY;
        }

        return false;
    }

    generateNewBoard() {
        let boards = [];
        let moves = this.generateMoves();

        for (let i = 0 ; i < moves.length ; i++) {
            boards[i] = board.clone();
            boards[i].move(this.x, this.y, moves[i].x, moves[i].y);
        }

        return boards;
    }

}