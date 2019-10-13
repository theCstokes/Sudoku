"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EMPTY_ENTRY = '.';
class SudokuFactory_ol {
    static generate() {
        // Create empty board.
        let board = Array.from({ length: 9 })
            .map(x => {
            return Array.from({ length: 9 })
                .map(x => EMPTY_ENTRY);
        });
        SudokuFactory_ol.solveSudokuCell(0, 0, board);
        return board;
    }
    /*
      Driver function to kick off the recursion
    */
    static solveSudoku(board) {
        return SudokuFactory_ol.solveSudokuCell(0, 0, board);
    }
    /*
      This function chooses a placement for the cell at (row, col)
      and continues solving based on the rules we define.
  
      Our strategy:
      We will start at row 0.
      We will solve every column in that row.
      When we reach the last column we move to the next row.
      If this is past the last row (row == board.length) we are done.
      The whole board has been solved.
    */
    static solveSudokuCell(row, col, board) {
        /*
          Have we finished placements in all columns for
          the row we are working on?
        */
        if (col == board[row].length) {
            /*
              Yes. Reset to col 0 and advance the row by 1.
              We will work on the next row.
            */
            col = 0;
            row++;
            /*
              Have we completed placements in all rows? If so then we are done.
              If not, drop through to the logic below and keep solving things.
            */
            if (row == board.length) {
                return true; // Entire board has been filled without conflict.
            }
        }
        // Skip non-empty entries. They already have a value in them.
        if (board[row][col] != EMPTY_ENTRY) {
            return SudokuFactory_ol.solveSudokuCell(row, col + 1, board);
        }
        /*
          Try all values 1 through 9 in the cell at (row, col).
          Recurse on the placement if it doesn't break the constraints of Sudoku.
        */
        for (let value = 1; value <= board.length; value++) {
            let charToPlace = value.toString();
            // char charToPlace = (char) (value + '0'); // convert int value to char
            /*
              Apply constraints. We will only add the value to the cell if
              adding it won't cause us to break sudoku rules.
            */
            if (SudokuFactory_ol.canPlaceValue(board, row, col, charToPlace)) {
                board[row][col] = charToPlace;
                if (SudokuFactory_ol.solveSudokuCell(row, col + 1, board)) { // recurse with our VALID placement
                    return true;
                }
            }
        }
        /*
          Undo assignment to this cell. No values worked in it meaning that
          previous states put us in a position we cannot solve from. Hence,
          we backtrack by returning "false" to our caller.
        */
        board[row][col] = EMPTY_ENTRY;
        return false; // No valid placement was found, this path is faulty, return false
    }
    /*
      Will the placement at (row, col) break the Sudoku properties?
    */
    static canPlaceValue(board, row, col, charToPlace) {
        // Check column constraint. For each row, we do a check on column "col".
        for (let k = 0; k < board.length; k++) {
            let element = board[k];
            if (charToPlace == element[col]) {
                return false;
            }
        }
        // Check row constraint. For each column in row "row", we do a check.
        for (let i = 0; i < board.length; i++) {
            if (charToPlace == board[row][i]) {
                return false;
            }
        }
        /*
          Check region constraints.
    
          In a 9 x 9 board, we will have 9 sub-boxes (3 rows of 3 sub-boxes).
    
          The "I" tells us that we are in the Ith sub-box row. (there are 3 sub-box rows)
          The "J" tells us that we are in the Jth sub-box column. (there are 3 sub-box columns)
    
          I tried to think of better variable names for like 20 minutes but couldn't so just left
          I and J.
    
          Integer properties will truncate the decimal place so we just know the sub-box number we are in.
          Each coordinate we touch will be found by an offset from topLeftOfSubBoxRow and topLeftOfSubBoxCol.
        */
        let regionSize = Math.floor(Math.sqrt(board.length)); // gives us the size of a sub-box
        let I = Math.floor(row / regionSize);
        let J = Math.floor(col / regionSize);
        /*
          This multiplication takes us to the EXACT top left of the sub-box. We keep the (row, col)
          of these values because it is important. It lets us traverse the sub-box with our double for loop.
        */
        let topLeftOfSubBoxRow = regionSize * I; // the row of the top left of the block
        let topLeftOfSubBoxCol = regionSize * J; // the column of the tol left of the block
        for (let i = 0; i < regionSize; i++) {
            for (let j = 0; j < regionSize; j++) {
                /*
                  i and j just define our offsets from topLeftOfBlockRow
                  and topLeftOfBlockCol respectively
                */
                if (charToPlace == board[topLeftOfSubBoxRow + i][topLeftOfSubBoxCol + j]) {
                    return false;
                }
            }
        }
        return true; // placement is valid
    }
}
exports.default = SudokuFactory_ol;
//# sourceMappingURL=SudokuFactory_ol.js.map