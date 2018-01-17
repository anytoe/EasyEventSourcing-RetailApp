import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BasketReadModel } from '../models/basket.model';
import { ProductReadModel } from '../../products/models/products.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class BasketService {

  constructor(private http: HttpClient) { }

  private _navItemSource = new BehaviorSubject<number>(0);

  OnInit(){

  }

  public basketEvent$ = this._navItemSource.asObservable();

  init() {
      // https://event-sourcing.azurewebsites.net
      // https://event-sourcing.azurewebsites.net`);

      return this.http.post(`https://event-sourcing.azurewebsites.net/api/baskets/init`, null);
  }
  
  getBasket(timestamp: Date) {
    // let encodedTimestamp = encodeURI(timestampString); // It is not clear to me why this is not working properly
    let timestampString = timestamp == null ? "" : "?timestamp=" + timestamp.toString().replace("+", "%2B");
    return this
      .http.get<BasketReadModel>(`https://event-sourcing.azurewebsites.net/api/baskets${timestampString}`)
      .map(data => {
        this.notifyBasketChange(data.ItemCount);
        return data;
      });
  }

  getEvents() {
    return this.http.get<Date[]>(`https://event-sourcing.azurewebsites.net/api/baskets/events`);
  }

  addItem(productId: string) {
    let productReadModel = new ProductReadModel();
    productReadModel.ProductId = productId;
    let currentQuantity = this.http.put<number>(`https://event-sourcing.azurewebsites.net/api/baskets/`, productReadModel);
    return currentQuantity;
  }

  private notifyBasketChange(number) {
    this._navItemSource.next(number);
  }
}
