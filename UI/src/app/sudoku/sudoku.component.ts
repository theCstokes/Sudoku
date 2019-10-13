import { Component, OnInit } from '@angular/core';
import { RestApiService } from "src/core/RestApiService";
import SudokuCell from "src/core/Models/SudokuCell";

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.less']
})
export class SudokuComponent implements OnInit {

  public boardData: SudokuCell[][] = [];

  constructor(
    public restApi: RestApiService,
  ) {
  }

  async ngOnInit() {
    let data = await this.restApi
      .SudokuBoard
      .load()
      .toPromise();
    this.buildBoardData(data);
  }

  public hasTopBoarder (item: SudokuCell): boolean {
    return (item.rowIndex % 3 === 0);
  }

  public hasBottomBoarder (item: SudokuCell): boolean {
    return (item.rowIndex % 3 === 2);
  }

  public hasLeftBoarder (item: SudokuCell): boolean {
    return (item.columnIndex % 3 === 0);
  }

  public hasRightBoarder (item: SudokuCell): boolean {
    return (item.columnIndex % 3 === 2);
  }

  public onCellClick(rowIdx: number, columnIdx: number) {
    console.debug({ action: 'onCellClick', args: [rowIdx, columnIdx] });

    let cell = this.boardData[rowIdx][columnIdx];
    cell.isLocked = (!cell.isLocked);
  }

  public async onReload() {
    console.debug({ action: 'onReload', args: [] });

    // Capture the current locked cells.
    let locations = this.boardData
      .reduce((result, row) => result.concat(row), [])
      .filter(element => element.isLocked)
      .map(element => {
        return {
          row: element.rowIndex,
          column: element.columnIndex,
          value: element.value
        }
      });

    // Reset - This will start the spinner.
    this.boardData = [];

    let boardRequest = { locations: locations };
    let data = await this.restApi
      .SudokuBoard
      .load(boardRequest)
      .toPromise();

    this.buildBoardData(data);
  }

  private buildBoardData(data: number[]) {
    this.boardData = data
      .reduce((result, item, idx) => {
        let resultIdx = Math.floor(idx / 9);
        let currentArray = result[resultIdx];

        if (currentArray === undefined) {
          currentArray = []
        }

        currentArray.push(item);

        result[resultIdx] = currentArray;
        return result;
      }, [])
      .map((row, rowIdx) => {
        return row.map((item, columnIdx) => {
          return {
            rowIndex: rowIdx,
            columnIndex: columnIdx,
            value: item,
            isLocked: false
          }
        })
      });
  }
}
