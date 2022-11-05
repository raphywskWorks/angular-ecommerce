import { ProductModel } from 'src/app/Models/store/product.model';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() products: ProductModel[] = []

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  redirectToProduct(productId: number): void {
    this.router.navigate([`store/products/${productId}`])
  }

}
