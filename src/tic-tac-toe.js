class TicTacToe {
    constructor() {
        this.step = 0;
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
    }

    getCurrentPlayerSymbol() {
        if (this.step % 2 === 0) {
            return 'x';
        } else {
            return 'o';
        }
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] === null) {
            this.field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.step++;
        }
    }

    isFinished() {
        if (this.isDraw() || this.getWinner()) {
            return true;
        } else {
            return false;
        }
    }

    getWinner() {
        if (this.field[0][0] === this.field[1][1] && this.field[0][0] === this.field[2][2]) {
            return this.field[0][0];
        }

        if (this.field[0][2] === this.field[1][1] && this.field[0][2] === this.field[2][0]) {
            return this.field[0][2];
        }

        for (let i = 0; i < 3; i++) {
            if (this.field[i][0] === this.field[i][1] && this.field[i][0] === this.field[i][2]) {
                return this.field[i][0];
            } else if (this.field[0][i] === this.field[1][i] && this.field[0][i] === this.field[2][i]) {
                return this.field[0][i];
            }
        }
        return null;
    }

    noMoreTurns() {
        if (this.step === 9) {
            return true;
        } else {
            return false;
        }
    }

    isDraw() {
        if (this.noMoreTurns() && this.getWinner() === null) {
            return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
