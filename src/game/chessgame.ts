import {ChessBoard} from "../board/chessboard";
import {Player} from "../player/player";
import {Color} from "../pieces/pieces";
import {Square} from "../board/square";

class ChessGame {
    private board: ChessBoard;
    private players: [Player, Player];
    private currentPlayerIndex: number = 0;

    constructor(player1Name: string, player2Name: string) {
        this.board = new ChessBoard();
        this.board.initializeBoard();

        this.players = [
            new Player(player1Name, Color.WHITE),
            new Player(player2Name, Color.BLACK)
        ];
    }

    public makeMove(move: string): void {
        // parseAlgebraicNotation => move the board ig
        // this.currentPlayerIndex++;
    }

    private parseAlgebraicNotation(move: string): { from: Square; to: Square } {
        // return { from: /* ... */, to: /* ... */ };
        throw new Error("TODO")
    }

    // need utils method for checkmate, en passant, rock, etc
}
