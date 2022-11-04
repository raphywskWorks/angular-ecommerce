import { ProductModel } from 'src/app/Models/store/product.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() products: ProductModel[] = []
  constructor() { }

  ngOnInit(): void {

  }

}
