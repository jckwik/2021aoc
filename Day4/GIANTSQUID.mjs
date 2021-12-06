import { readFileSync } from 'fs';
import BingoBoard from './bingo.mjs';
var file = readFileSync('input.txt', 'utf8');

var squidInput = file.split('\r\n\r\n');
var numbers = squidInput[0].split(',');
var bingoBoards = [];
squidInput.forEach((board, index) => {
    if (index > 0) {
        bingoBoards.push(new BingoBoard(board));
    }
});

var finalScore = 0;

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    var bingo = false;
    var bingoBoard = 0;
    bingoBoards.forEach((board, index) => {
        board.checkNumber(number);
        if (board.checkBingo()) {
            bingo = true;
            bingoBoard = index;
        }
    });
    if (bingo) {
        var score = bingoBoards[bingoBoard].getScore();
        finalScore = score * number;
        break;
    }
}

console.log(`Bingo! Final score for this round Part 1: ${finalScore}`);

bingoBoards = [];
squidInput.forEach((board, index) => {
    if (index > 0) {
        bingoBoards.push(new BingoBoard(board));
    }
});

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    console.log(`Round ${i + 1}: checking number ${number}`);
    var forDeletion = [];
    bingoBoards.forEach((board, index) => {
        board.checkNumber(number);
        if (board.checkBingo()) {
            forDeletion.push(board);
        }
    });
    if (bingoBoards.length === 1 && forDeletion.length === 1) {
        var score = bingoBoards[0].getScore();
        bingoBoards[0].printGrid();
        finalScore = score * number;
        break;
    }
    if (forDeletion.length > 0) {
        console.log(`Round ${i + 1} deletions: ${forDeletion.length}`);
        forDeletion.forEach((board, index) => {
            console.log(`Deleting board ${index + 1}:`);
            board.printGrid();
        })
        bingoBoards = bingoBoards.filter((board) => {
            return !forDeletion.includes(board);
        });
        forDeletion = [];
    }
    console.log(`Remaining boards: ${bingoBoards.length}`);
}

console.log(`Last Bingo! Final score for this round Part 2: ${finalScore}`);