import { SudokuBoard, SudokuCell, EmptySudokuCell } from "Application/DomainLogic/SudokuBoard";

export class SeedLocation {
  public row: number;
  public column: number;
  public value: number;
}

export class SudokuSeed {
  public locations: SeedLocation[];
}

export default class SudokuFactory {

  public static generate(seed?: SudokuSeed): SudokuBoard {
    // Create empty board.
    let board = SudokuFactory.createBoard(seed);
    SudokuFactory.solveSudokuCell(0, 0, board);
    return board;
  }

  public static createBoard(seed?: SudokuSeed): SudokuBoard {
    return Array.from({ length: 9 })
      .map((_, rowIdx) => {
        return Array.from({ length: 9 })
          .map((_, columnIdx) => {
            if (seed === undefined) {
              return EmptySudokuCell;
            }
            let location = seed.locations.find(x => x.row === rowIdx && x.column === columnIdx);
            if (location !== undefined) {
              return location.value;
            }
            return EmptySudokuCell;
          });
      });
  }

  private static solveSudokuCell(row: number, col: number, board: SudokuBoard): boolean {

    // Validate our inputs
    if (col === board[row].length) {
      col = 0;
      row++;

      if (row === board.length) {
        return true;
      }

    }

    // Skip those that are not empty.
    if (board[row][col] !== EmptySudokuCell) {
      return SudokuFactory.solveSudokuCell(row, col + 1, board);
    }

    // Try to place a new value.
    let array = SudokuFactory.createRandomArray();
    let isSuccessful = array.some(charToPlace => {
      if (SudokuFactory.canPlaceValue(board, row, col, charToPlace)) {
        board[row][col] = charToPlace;
        if (SudokuFactory.solveSudokuCell(row, col + 1, board)) { // recurse with our VALID placement
          return true;
        }
      }
      return false;
    });

    if (isSuccessful) {
      return true;
    }

    board[row][col] = EmptySudokuCell;
    return false;
  }

  private static createRandomArray(): SudokuCell[] {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  private static canPlaceValue(board: SudokuBoard, row: number, col: number, charToPlace: SudokuCell): boolean {
    if (!SudokuFactory.canPlaceValueInRow(board, row, col, charToPlace)) {
      return false;
    }

    if (!SudokuFactory.canPlaceValueInColumn(board, row, col, charToPlace)) {
      return false;
    }

    return SudokuFactory.canPlaceValueInSubGroup(board, row, col, charToPlace);
  }

  private static canPlaceValueInColumn(board: SudokuBoard, row: number, col: number, charToPlace: SudokuCell): boolean {
    for (let k = 0; k < board.length; k++) {
      let element = board[k];
      if (charToPlace === element[col]) {
        return false;
      }
    }

    return true;
  }

  private static canPlaceValueInRow(board: SudokuBoard, row: number, col: number, charToPlace: SudokuCell): boolean {
    for (let i = 0; i < board.length; i++) {
      if (charToPlace === board[row][i]) {
        return false;
      }
    }

    return true;
  }

  private static canPlaceValueInSubGroup(board: SudokuBoard, row: number, col: number, charToPlace: SudokuCell): boolean {
    let regionSize = Math.floor(Math.sqrt(board.length));

    let subGroupRowShiftFactor = Math.floor(row / regionSize);
    let subGroupColumnShiftFactor = Math.floor(col / regionSize);

    let topLeftOfSubBoxRow = regionSize * subGroupRowShiftFactor;
    let topLeftOfSubBoxCol = regionSize * subGroupColumnShiftFactor;

    for (let i = 0; i < regionSize; i++) {
      for (let j = 0; j < regionSize; j++) {

        if (charToPlace === board[topLeftOfSubBoxRow + i][topLeftOfSubBoxCol + j]) {
          return false;
        }

      }
    }

    return true;
  }
}
