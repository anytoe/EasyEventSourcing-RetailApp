import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BasketReadModel } from '../models/basket.model';
import { ProductReadModel } from '../../products/models/products.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class BasketService {

  constructor(private http: HttpClient) { }

  private _navItemSource = new BehaviorSubject<number>(0);

  OnInit(){

  }

  public basketEvent$ = this._navItemSource.asObservable();

  getBasket(timestamp: Date) {
    // let encodedTimestamp = encodeURI(timestampString); // It is not clear to me why this is not working properly
    let timestampString = timestamp == null ? "" : "?timestamp=" + timestamp.toString().replace("+", "%2B");
    let basketReadModel = this.http.get<BasketReadModel>(`http://localhost:50158/api/baskets${timestampString}`);

    basketReadModel.subscribe(data => {
      this.notifyBasketChange(data.ItemCount);      
    });

    return basketReadModel;
  }

  getEvents() {
    return this.http.get<Date[]>(`http://localhost:50158/api/baskets/events`);
  }

  addItem(productId: string) {
    let productReadModel = new ProductReadModel();
    productReadModel.ProductId = productId;
    let currentQuantity = this.http.put<number>(`http://localhost:50158/api/baskets/`, productReadModel);
    return currentQuantity;
  }

  private notifyBasketChange(number) {
    this._navItemSource.next(number);
  }
}
