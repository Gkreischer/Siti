import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BaseUrl } from './../shared/baseUrl'
import { ErrorObservable } from 'rxjs/observable/ErrorObservable'
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  URL_DEFAULT:string = BaseUrl;

  URL_DEFAULT_EMAIL = BaseUrl.substr(0,21);

  leRegistro(rota: string):Observable<any>{
    return this.http.get(this.URL_DEFAULT + rota).pipe(
      tap(data => { return data}),
      catchError(this.handleError)
    );
  }

  leRegistroEspecifico(rota: string, id:string):Observable<any>{
    return this.http.get(`${this.URL_DEFAULT}${rota}/${id}`).pipe(
      tap(data => { return data}),
      catchError(this.handleError)
    );
  }

  criaRegistro(rota:string, form):Observable<any>{
    return this.http.post(this.URL_DEFAULT + rota, form).pipe(
      tap(data => { return data || []}),
      catchError(this.handleError)
    );
  }

  atualizaRegistro(rota: string, id: string, form): Observable<any> {
    return this.http.post(this.URL_DEFAULT + rota + '/' + id, form).pipe(
      tap(data => { return data}),
      catchError(this.handleError)
    );
  }

  deletaRegistro(rota: string, id: string):Observable<any>{
    return this.http.delete(this.URL_DEFAULT + rota + '/' + id).pipe(
      tap(data => { return data}),
      catchError(this.handleError)
    );
  }

  
  
  // Tratamento de erro
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('Um erro ocorreu', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend retornou a msg ${error.status}, ` +
        `body era: ${JSON.stringify(error.error.message)}`);
    }
    // return an observable with a user-facing error message
    return ErrorObservable.create(`${JSON.stringify(error.error.message)}`);
  };

}