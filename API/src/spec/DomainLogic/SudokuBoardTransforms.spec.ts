import SudokuBoardTransforms from "Application/DomainLogic/SudokuBoardTransforms";


describe('SudokuBoardTransforms', () => {
  describe('transpose', () => {

    test('2 by 2', () => {
      const input = [[1,2],[3,4]];
      const target = [[1,3],[2,4]];
      expect(SudokuBoardTransforms.transpose(input)).toEqual(target);
    });

    test('2 by 3', () => {
      const input = [[1,2],[3,4],[5,6]];
      const target = [[1,3,5],[2,4,6]];
      expect(SudokuBoardTransforms.transpose(input)).toEqual(target);
    });

    test('3 by 2', () => {
      const input = [[1,2,3],[4,5,6]];
      const target = [[1,4],[2,5],[3,6]];
      expect(SudokuBoardTransforms.transpose(input)).toEqual(target);
    });
  });

  describe('flatten', () => {

    test('2 by 2', () => {
      const input = [[1,2],[3,4]];
      const target = [1,2,3,4];
      expect(SudokuBoardTransforms.flatten(input)).toEqual(target);
    });

    test('2 by 3', () => {
      const input = [[1,2],[3,4],[5,6]];
      const target = [1,2,3,4,5,6];
      expect(SudokuBoardTransforms.flatten(input)).toEqual(target);
    });

    test('3 by 2', () => {
      const input = [[1,2,3],[4,5,6]];
      const target = [1,2,3,4,5,6];
      expect(SudokuBoardTransforms.flatten(input)).toEqual(target);
    });
  });

  describe('toSubGrid', () => {

    test('9 by 9', () => {
      const input = [
        [11,12,13,14,15,16,17,18,19],
        [21,22,23,24,25,26,27,28,29],
        [31,32,33,34,35,36,37,38,39],

        [41,42,43,44,45,46,47,48,49],
        [51,52,53,54,55,56,57,58,59],
        [61,62,63,64,65,66,67,68,69],

        [71,72,73,74,75,76,77,78,79],
        [81,82,83,84,85,86,87,88,89],
        [91,92,93,94,95,96,97,98,99]
        ];
      const target =
        [
          [11,12,13,21,22,23,31,32,33],
          [14,15,16,24,25,26,34,35,36],
          [17,18,19,27,28,29,37,38,39],

          [41,42,43,51,52,53,61,62,63],
          [44,45,46,54,55,56,64,65,66],
          [47,48,49,57,58,59,67,68,69],

          [71,72,73,81,82,83,91,92,93],
          [74,75,76,84,85,86,94,95,96],
          [77,78,79,87,88,89,97,98,99]
        ];

      expect(SudokuBoardTransforms.toSubGrid(input)).toEqual(target);
    });
  });
});
