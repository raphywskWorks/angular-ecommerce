import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HeaderComponent } from '../components/header/header.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store/store.component';


@NgModule({
  declarations: [
    StoreComponent,
    ProductsComponent,
    ProductDetailsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    MatCardModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class StoreModule { }
