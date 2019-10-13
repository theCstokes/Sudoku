import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import SudokuBoardResource from "src/core/SudokuBoardResource";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  constructor(private http: HttpClient) { }

  public readonly SudokuBoard: SudokuBoardResource<number[]>
    = new SudokuBoardResource(this.http, environment.apiUrl, 'sudoku/board');

}
