import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrl = 'https://vidsrc.to/vapi';

  constructor(private http: HttpClient) { }

  getNewMovies(page: number, searchQuery: string = ''): Observable<any> {
    const url = `${this.baseUrl}/movie/new/${page}`;
    const params = searchQuery ? { params: { search: searchQuery } } : {};
    return this.http.get(url, params).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.error('An error occurred:', error);

    return throwError('Something bad happened; please try again later.');
  }
}
