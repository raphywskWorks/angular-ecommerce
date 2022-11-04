import { Observable, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

export function processError(err: any): Observable<any> {
  return throwError(err)
}
