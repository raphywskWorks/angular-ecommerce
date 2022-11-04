import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store/store.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    StoreComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    MatCardModule
  ]
})
export class StoreModule { }
