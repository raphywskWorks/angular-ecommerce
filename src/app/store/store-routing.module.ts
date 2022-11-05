import { ProductDetailsComponent } from './product-details/product-details.component';
import { StoreComponent } from './store/store.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCard } from '@angular/material/card';

const routes: Routes = [
  { path: '', component: StoreComponent},
  { path: 'products/:id', component: ProductDetailsComponent,  }

];

@NgModule({
  imports: [RouterModule.forChild(routes), MatSnackBarModule],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
