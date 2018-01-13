import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { BasketComponent } from './basket/components/basket/basket.component';
import { ProductsComponent } from './products/components/products/products.component';
import { ProductEditComponent } from './products/components/product-edit/product-edit.component';

const routes: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'basket',      component: BasketComponent },
  { path: 'products',      component: ProductsComponent },
  { path: 'products/:productId',      component: ProductEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
