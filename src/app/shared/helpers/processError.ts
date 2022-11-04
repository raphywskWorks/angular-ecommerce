import { Observable, throwError } from 'rxjs';

export function processError(err: any): Observable<any> {
  return throwError(err)
}
