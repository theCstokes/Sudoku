"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SudokuFactory_1 = require("Application/DomainLogic/SudokuFactory");
const SudokuBoardTransforms_1 = require("Application/DomainLogic/SudokuBoardTransforms");
function testArray(thing, current) {
    const target = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    target.forEach(x => {
        let subset = current.filter(c => c == x);
        if (subset.length !== 1) {
            fail(`Expected ${thing} to contain exactly 1 occurrence of ${x}. Actual occurrence ${subset.length} was found`);
        }
    });
    expect(current.length).toEqual(target.length);
}
function testRows(board) {
    board.forEach((row, idx) => {
        testArray(`row at index ${idx}`, row);
    });
}
function testColumns(board) {
    let board_t = SudokuBoardTransforms_1.default.transpose(board);
    board_t.forEach((col, idx) => {
        testArray(`column at index ${idx}`, col);
    });
}
function checkValidBoard(board) {
    testRows(board);
    testColumns(board);
    testSubGroups(board);
}
function testSubGroups(board) {
    let boardGroups = SudokuBoardTransforms_1.default.toSubGrid(board);
    boardGroups.forEach((col, idx) => {
        testArray(`group at index ${idx}`, col);
    });
}
describe('SudokuFactory', () => {
    describe('generate', () => {
        test('adds 1 + 2 to equal 3', () => {
            let board = SudokuFactory_1.default.generate();
            checkValidBoard(board);
        });
    });
});
//# sourceMappingURL=SudokuFactory.spec.js.map