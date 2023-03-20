import { CartService } from './../services/cart.service';
import { catchError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from './../services/products.service';
import { ProductModel } from './../../Models/store/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product!: ProductModel
  qtd: any = '1';

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.getProduct()
  }

  ngOnInit(): void {

  }

  showConnectionError(): void {
    this.snackBar.open('Conection failure! Try again later.', 'Close', {
      verticalPosition: 'top'
    })
  }

  showNotFindError(): void {
    this.snackBar.open('Product not found.', 'Close', {
      verticalPosition: 'top'
    })
  }

  getProduct(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id')
    if ( !id ) {
      this.snackBar.open('Invalid Product')
      this.router.navigate(['store'])
      return
    }

    this.productsService.getProductById(id).subscribe( product => {
      if( !product ) {
        this.showNotFindError()
        return
      }

      this.product = product;
      console.log(this.product)

    }, _ => {
      this.showConnectionError()
    })
  }

  changeQuantity(qtd: any): void {
    console.log(qtd)
    this.qtd = qtd;

  }

}
