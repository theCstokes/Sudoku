export class SudokuCellRequest {
  public row: number;
  public column: number;
  public value: number;
}

export default class SudokuBoardRequest {
  public locations: SudokuCellRequest[];
}
