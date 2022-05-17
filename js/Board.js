"use strict";

class Board {

    constructor(whites, blacks) {
        this.whitePieces = whites ?? [];
        this.blackPieces = blacks ?? [];
        this.score = 0;


        this.whitesMove = undefined;
        this.whiteAi = undefined;
        this.blackAi = undefined;


        this.setupPieces("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR");
    }

    setupPieces(fen) {
        fen = fen.replaceAll("/", "");

        //console.log(fen);
    }

    move(x1, y1, x2, y2) {
        let piece = this.getPieceAt(x1, y1);

        if (piece == null) {
            return;
        }

        piece.move(x2,y2);
    }

    generateNewWhiteBoardTurn() {
        let boards = [];
        for (let whitePiece in this.whitePieces) {
            if (!whitePiece.isTaken()) {
                let tempBoards = whitePiece.generateNewBoard();
                for (let board in tempBoards) {
                    boards.push(board);
                }
            }
        }
        return boards;
    }

    generateNewBlackBoardTurn() {
        let boards = [];
        for (let blackPiece in this.blackPieces) {
            if (!blackPiece.isTaken()) {
                let tempBoards = blackPiece.generateNewBoard();
                for (let board in tempBoards) {
                    boards.push(board);
                }
            }
        }
        return boards;
    }

    clone() {
        let white = [...this.whitePieces];
        let black = [...this.blackPieces];

        return new Board(white, black);
    }

    setScore() {
        this.score = 0;

        this.whitePieces.forEach(item => this.score -= item.value);
        this.blackPieces.forEach(item => this.score += item.value);
    }

    getWhiteKing() {
        for (let piece in this.whitePieces) {
            if (piece.value === 99) {
                return piece;
            }
        }
        return null;
    }

    getBlackKing() {
        for (let piece in this.blackPieces) {
            if (piece.value === 99) {
                return piece;
            }
        }
        return null;
    }

    isDead() {
        if (this.whiteAi && this.whitesMove) {
            return this.getBlackKing().taken;
        }
        if (this.blackAi && !this.whitesMove) {
            return this.getWhiteKing().taken;
        }

        return false;
    }

    hasWon() {
        if (this.whiteAi && this.whitesMove) {
            return this.getBlackKing().taken;
        }
        if (this.blackAi && !this.whitesMove) {
            return this.getWhiteKing().taken;
        }

        return false;
    }

}