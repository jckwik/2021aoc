class BingoBoard {
  constructor(gridStrings) {
    this.grid = [];
    var rows = gridStrings.split("\r\n");
    rows.forEach((row) => {
      this.grid.push(row.trim().split(/\s+/g));
    });
    this.checkedRows = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];
  }

  checkBingo() {
    var bingo = false;
    this.checkedRows.forEach((row) => {
      if (this.checkRow(row)) {
        bingo = true;
      }
    });
    for (var i = 0; i < 5; i++) {
      if (this.checkColumn(i)) {
        bingo = true;
      }
    }
    return bingo;
  }

  checkRow(row) {
    var sum = row.reduce((sum, num) => sum + num);
    return sum === 5;
  }

  checkColumn(index) {
    var sum = 0;
    this.checkedRows.forEach((row) => {
      sum += row[index];
    });
    return sum === 5;
  }

  getScore() {
    var score = 0;
    this.checkedRows.forEach((checkedRow, rowIndex) => {
      checkedRow.forEach((checked, colIndex) => {
        if (checked === 0) {
          score += parseInt(this.grid[rowIndex][colIndex]);
        }
      });
    });
    return score;
  }

  checkNumber(number) {
    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 5; j++) {
        if (this.grid[i][j] === number) {
          this.checkedRows[i][j] = 1;
        }
      }
    }
  }
  printGrid() {
    this.grid.forEach((row, index) => {
      console.log(row.join(" ") + " " + this.checkedRows[index].join(" "));
    });
  }
}

export default BingoBoard;
