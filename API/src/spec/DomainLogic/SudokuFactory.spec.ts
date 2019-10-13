import SudokuFactory from "Application/DomainLogic/SudokuFactory";
import SudokuBoardTransforms from "Application/DomainLogic/SudokuBoardTransforms";
import { SudokuBoard, SudokuCell } from "Application/DomainLogic/SudokuBoard";

function testArray(thing: string, current: SudokuCell[]) {
  const target = ["1","2","3","4","5","6","7","8","9"];
  target.forEach(x => {
    let subset = current.filter(c => c == x);

    if (subset.length !== 1) {
      fail(`Expected ${thing} to contain exactly 1 occurrence of ${x}. Actual occurrence ${subset.length} was found`)
    }
  });

  expect(current.length).toEqual(target.length);
}

function testRows(board: SudokuBoard) {
  board.forEach((row, idx) => {
    testArray(`row at index ${idx}`, row);
  });
}

function testColumns(board: SudokuBoard) {
  let board_t = SudokuBoardTransforms.transpose(board);

  board_t.forEach((col, idx) => {
    testArray(`column at index ${idx}`, col);
  });
}

function checkValidBoard(board: SudokuBoard) {
  testRows(board);
  testColumns(board);
  testSubGroups(board);
}

function testSubGroups(board: SudokuBoard) {
  let boardGroups = SudokuBoardTransforms.toSubGrid(board);

  boardGroups.forEach((col, idx) => {
    testArray(`group at index ${idx}`, col);
  });
}

describe('SudokuFactory', () => {
  describe('generate', () => {

    test('adds 1 + 2 to equal 3', () => {
      let board = SudokuFactory.generate();
      checkValidBoard(board);
    });

  });
});
