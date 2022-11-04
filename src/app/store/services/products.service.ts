import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/Models/store/product.model';
import { catchError, Observable, retry } from 'rxjs';
import { processError } from 'src/app/shared/helpers/processError';

import { environment } from './../../../environments/environment';

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
    .pipe(
      retry(1),
      catchError(processError)
    )
  }

  getSingleProduct(id: number): Observable<ProductModel> {
    return this.http.get<ProductModel>(`${this.api}products/${id}`)
      .pipe(
        retry(1),
        catchError(processError)
      )
  }

  fetchCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.api}products/categories`)
    .pipe(
      retry(1),
      catchError(processError)
    )
  }

  getProductsByCategory(category: string): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${this.api}products/category/${category}`)
    .pipe(
      retry(1),
      catchError(processError)
    )
  }

  createProduct(product: ProductModel): Observable<ProductModel> {
    return this.http.post<ProductModel>(`${this.api}products`, product)
    .pipe(
      retry(1),
      catchError(processError)
    )
  }

  updateProduct(product: ProductModel): Observable<ProductModel> {
    return this.http.patch<ProductModel>(`${this.api}products/${product.id}`, product)
    .pipe(
      retry(1),
      catchError(processError)
    )
  }

  deleteProduct(id: number): Observable<ProductModel> {
    return this.http.delete<ProductModel>(`${this.api}products/${id}`)
    .pipe(
      retry(1),
      catchError(processError)
    )
  }

}
