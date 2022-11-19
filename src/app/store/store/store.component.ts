import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/Models/store/product.model';
import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  products: ProductModel[] = []
  constructor(private productService: ProductsService, private snackbar: MatSnackBar) {
    this.fetchProducts();
  }

  ngOnInit(): void {}

  fetchProducts(): void {
    this.productService.fetch().subscribe( (res) => {
      this.products = res
    }, err => {
      this.snackbar.open(err.message, 'error')
    })
  }

}
