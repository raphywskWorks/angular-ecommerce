import { StoreComponent } from './store/store.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const routes: Routes = [
  { path: '', component: StoreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatSnackBarModule],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
