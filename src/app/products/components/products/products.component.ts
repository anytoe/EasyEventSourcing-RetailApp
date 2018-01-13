import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductReadModel } from '../../models/products.model';
import { CurrencyPipe } from '@angular/common';
import { BasketService } from '../../../shared/services/basket.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private productsService: ProductsService,
    private basketService: BasketService
  ) { }

  public hasLoaded: boolean = false;

  products: ProductReadModel[] = [];
  hasProducts: boolean = false;

  ngOnInit() {
    this.productsService.getAll()
      .subscribe((data) => {
        this.products = data;
        this.hasProducts = this.products.length > 0;
        this.hasLoaded = true;        
      },
      (error) => {

      },
      () =>
      { }
      );
  }

  addToBasket(productId: string) {
    this.basketService.addItem(productId)
      .subscribe((data) => {
        // nothing to do
        this.basketService.getBasket(null)
        .subscribe();
      },
      (error) => { },
      () => { });
  }

  createProducts(){
    this.productsService.create()
      .subscribe((data) => {
        this.ngOnInit();
      },
      (error) => { },
      () => { });
  }

  edit() {

  }

}
