import { ProductDetailsComponent } from './product-details/product-details.component';
import { StoreComponent } from './store/store.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: StoreComponent},
  { path: 'products', redirectTo: ''},
  {
    path: 'products/:id',
    component: ProductDetailsComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
