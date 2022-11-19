import { BehaviorSubject, Observable, retry, catchError } from 'rxjs';
import { CartModel } from './../../Models/store/cart.model';
import { Injectable } from '@angular/core';

import { environment } from './../../../environments/environment';
import { processError } from 'src/app/shared/helpers/processError';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  api: string = `${environment.FAKE_STORE_API}carts`;
  cart: BehaviorSubject<CartModel[]>

  constructor(private http: HttpClient) {
    this.cart = new BehaviorSubject<CartModel[]>([this.getEmptyCart()])
  }

  private getEmptyCart(): CartModel {
    return {
      id: 0,
      userId: 0,
      date: '',
      products: [],
    };
  }

  fetchCarts(): Observable<CartModel[]> {
    return this.http
      .get<CartModel[]>(`${this.api}`)
      .pipe(retry(1), catchError(processError))
  }

  getCartById(id: number | string): Observable<CartModel> {
    return this.http
      .get<CartModel>(`${this.api}/${id}`)
      .pipe(retry(1), catchError(processError))
  }

  getCartByUserId(userId: number | string): Observable<CartModel[]> {
    return this.http
      .get<CartModel[]>(`${this.api}user/${userId}`)
      .pipe(retry(1), catchError(processError))
  }
}
