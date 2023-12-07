import { isNaN } from "lodash";

interface FenBoard {
    board: (string | null)[][];
    activeColor: String;
    castlingAvailability: String;
    enPassant: String;
    halfMoveClock: number;
    fullMoveNumber: number;
}

export function parseFEN(fen: String) : FenBoard {
  const parts = fen.split(' ');
  const board = parts[0].split('/').map(rank => {
      const row = [];
      for (let char of rank) {
          if (isNaN(Number(char))) {
              row.push(char);
          } else {
              for (let i = 0; i < parseInt(char, 10); i++) {
                  row.push(null);
              }
          }
      }
      return row;
  });

  return {
      board,
      activeColor: parts[1],
      castlingAvailability: parts[2],
      enPassant: parts[3],
      halfMoveClock: parseInt(parts[4], 10),
      fullMoveNumber: parseInt(parts[5], 10)
  };
}
