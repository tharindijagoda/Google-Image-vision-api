import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class HttpApiService {

  constructor(
    private http: HttpClient
  ) { }


  private handleError(apiName, body) {
    return of({
      type: 'ERROR'
    });
  }

  public postImage(url, body) {
    const httpOPtions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(url, body, httpOPtions)
      .pipe(
        catchError(this.handleError.bind('postImage', body))
      );

  }
}
