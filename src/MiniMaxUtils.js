"use strict";



let board;

let cellsize;
const grid_size_x = 8, grid_size_y = 8;

let maxDepth = 3;

// deprecated atm

function minFun(board, depth) {

    if (depth >= maxDepth) {
        board.setScore();
        return board.score;
    }

    let boards = board.generateNewWhiteBoardTurn();

    let lowestIdx = 0;
    let lowestScore = 100000;

    for (let i = 0 ; i < boards.size() ; i ++) {
        if (!boards.get(i).isDead()) {
            let score = maxFun(boards.get(i), depth + 1);
            if (score < lowestScore) {
                lowestIdx = i;
                lowestScore = score;
            }
        }
    }

    return lowestScore;
}

function maxFun(board, depth) {
    if (depth >= maxDepth) {
        board.setScore();
        return board.score;
    }

    let boards = board.generateNewBlackBoardTurn();

    let topIdx = 0;
    let topScore = -100000;
    for (let i = 0 ; i < boards.size() ; i++) {
        let score = minFun(boards.get(i), depth +1);
        if (score > topScore) {
            topIdx = i;
            topScore = score;
        }
    }

    if (depth === 0) {
        return boards.get(topIdx).score;
    }

    return topScore;
}

function minFunAb(board, alpha, beta, depth) {
    if (depth >= maxDepth) {
        board.setScore();
        return board.getScore();
    }

    if (board.isDead()) {
        if (board.whiteAi && board.whitesMove) {
            return 200;
        }
        if (board.blackAi && !board.whitesMove) {
            return -200;
        }
    }

    if (board.hasWon()) {
        if (board.whiteAi && board.whitesMove) {
            return -200;
        }
        if (board.blackAi && !board.whitesMove) {
            return 200;
        }
    }

    let boards = board.generateNewWhiteBoardTurn();
    let lowestIdx = 0;
    let lowestScore = 300;
    for (let i = 0 ; i < boards.size() ; i++) {
        let score = maxFunAB(boards.get(i), alpha, beta, depth+1);
        if (score < lowestScore) {
            lowestIdx = i;
            lowestScore = score;
        } else {
            if (depth === 0 && score === lowestScore) {
                if (Math.random() < 0.3) {
                    lowestIdx = i;
                }
            }
        }

        if (score < alpha) {
            return lowestScore;
        }

        if (score < beta) {
            beta = score;
        }
    }

    if (depth === 0) {
        return boards.get(lowestIdx).score;
    }

    return lowestScore;
}

function maxFunAB(board, alpha, beta, depth) {
    if (depth >= maxDepth) {
        board.setScore();
        return board.score;
    }

    if (board.isDead()) {
        if (board.whiteAi && board.whitesMove) {
            return 200;
        }
        if (board.blackAi && board.whitesMove) {
            return -200;
        }
    }

    if (board.hasWon()) {
        if (board.whiteAi && board.whitesMove) {
            return -200;
        }
        if (board.blackAi && board.whitesMove) {
            return 200;
        }
    }

    let boards = board.generateNewBlackBoardTurn();
    let topIdx = 0;
    let topScore = -300;

    for (let i = 0; i < boards.size() ; i++) {
        let score = minFunAb(boards.get(i), alpha, beta, depth +1);
        if (score > topScore) {
            topIdx = i;
            topScore = score;
        } else {
            if (depth === 0 && score === topScore) {
                if (Math.random() < 0.3) {
                    topIdx = i;
                }
            }
        }

        if (score > beta) {
            return topScore;
        }
        if (score > alpha) {
            alpha = score;
        }
    }

    if (depth === 0) {
        return boards.get(topIdx).score;
    }

    return topScore;
}