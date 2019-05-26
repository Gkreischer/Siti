import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BaseUrl } from './../shared/baseUrl'
import { ErrorObservable } from 'rxjs/observable/ErrorObservable'
import { Login } from './../shared/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  URL_DEFAULT:string = BaseUrl;
  erro;

  login(dadosLogin: Login):Observable<any> {
    return this.http.post(this.URL_DEFAULT + '/loginUsuario', dadosLogin).pipe(
      tap(data => { return data}),
      catchError(this.handleError)
    );
  }

  // Tratamento de erro
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('Um erro ocorreu', error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `${error.message}`);
    }
    // return an observable with a user-facing error message
    return ErrorObservable.create(`${JSON.stringify(error.message)}`);
  };
}
