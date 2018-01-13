import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/components/home/home.component';
import { BasketComponent } from './basket/components/basket/basket.component';
import { BasketService } from './shared/services/basket.service';
import { ProductsComponent } from './products/components/products/products.component';
import { ProductsService } from './products/services/products.service';
import { ProductEditComponent } from './products/components/product-edit/product-edit.component';
import { BasketiconComponent } from './basket/components/basketicon/basketicon.component';
import 'rxjs/add/operator/finally';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasketComponent,
    ProductsComponent,
    ProductEditComponent,
    BasketiconComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, // required for [(ngModel)]
  ],
  providers: [ // Important for injectability
    BasketService, 
    ProductsService,  
    HttpClient
  ],
  exports: [
    BasketiconComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
