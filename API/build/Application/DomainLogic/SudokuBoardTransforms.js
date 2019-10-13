"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SudokuBoardTransforms {
    /**
     * Transposes the given matrix.
     * @param m - The matrix to be transposed.
     */
    static transpose(m) {
        return m[0].map((col, i) => m.map(row => row[i]));
    }
    static flatten(m) {
        return m.reduce((result, x) => result.concat(x), []);
    }
    static toSubGrid(m) {
        let flat = SudokuBoardTransforms.flatten(m);
        const SubRowSize = 3;
        const RowLength = 9;
        return m.reduce((result, _, rowIdx) => {
            let shift = (rowIdx * (RowLength));
            Array.from({ length: SubRowSize })
                .forEach((_, idx) => {
                let start = shift + (idx * SubRowSize);
                let end = (start + SubRowSize);
                let outIdx = (idx + (Math.floor(rowIdx / SubRowSize) * SubRowSize));
                let out = result[outIdx];
                if (out === undefined) {
                    out = [];
                }
                result[outIdx] = out.concat(flat.slice(start, end));
            });
            return result;
        }, new Array());
    }
}
exports.default = SudokuBoardTransforms;
//# sourceMappingURL=SudokuBoardTransforms.js.map