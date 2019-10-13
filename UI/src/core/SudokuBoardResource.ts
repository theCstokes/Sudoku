import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';
import SudokuBoardRequest from "src/core/Models/Headers/SudokuBoardRequest";

export default class SudokuBoardResource<TModel> {
  public constructor(
    private http: HttpClient,
    private apiURL: string,
    private resource
  ) {
  }

  // HttpClient API get() method => Fetch employee
  load(boardRequest?: SudokuBoardRequest): Observable<TModel> {
    let url = `${this.apiURL}/${this.resource}`;

    let headers = new HttpHeaders();

    if (boardRequest !== undefined) {
      headers = headers.set('BoardRequest', JSON.stringify(boardRequest));
    }

    return this.http.get<TModel>(url, { headers: headers })
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
