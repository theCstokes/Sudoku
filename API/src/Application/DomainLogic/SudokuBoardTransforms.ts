export default class SudokuBoardTransforms {
  /**
   * Transposes the given matrix.
   * @param m - The matrix to be transposed.
   */
  public static transpose<T>(m: T[][]): T[][] {
    return m[0].map((col, i) => m.map(row => row[i]));
  }

  public static flatten<T>(m: T[][]): T[] {
    return m.reduce((result, x) => result.concat(x), []);
  }

  public static toSubGrid<T>(m: T[][]): T[][] {
    let flat = SudokuBoardTransforms.flatten(m);

    const SubRowSize = 3;

    const RowLength = 9;

    return m.reduce((result, _, rowIdx) => {
      let shift = (rowIdx * (RowLength));

      Array.from<T>({length: SubRowSize})
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
    }, new Array<T[]>());


  }
}
