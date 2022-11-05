import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/Models/store/product.model';
import { Observable, retry, catchError } from 'rxjs';

import { environment } from './../../../environments/environment';
import { processError } from 'src/app/shared/helpers/processError';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  api: string =  environment.FAKE_STORE_API
  constructor(private http: HttpClient) { }

  fetch(limit: number = 0): Observable<ProductModel[]> {
    const resultLimit: string = (limit > 0) ? `&limit=${limit}` : ''
    const resultSort: string = '?sort=desc'
    const options: string = `${resultSort}${resultLimit}`

    return this.http.get<ProductModel[]>(`${this.api}products${options}`)
      .pipe(retry(1), catchError(processError))
  }

  getProductById(id: number | string): Observable<ProductModel> {
    return this.http.get<ProductModel>(`${this.api}products/${id}`)
      .pipe(retry(1), catchError(processError))
  }

}
