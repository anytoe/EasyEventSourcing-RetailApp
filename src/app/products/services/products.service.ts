import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductReadModel } from '../models/products.model';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<ProductReadModel[]>(`https://event-sourcing.azurewebsites.net/api/products/`);
  }

  get(id: string) {
    return this.http.get<ProductReadModel>(`https://event-sourcing.azurewebsites.net/api/products/${id}`);
  }

  create() {
    return this.http.post(`https://event-sourcing.azurewebsites.net/api/products/create`, null);
  }

  update(product: ProductReadModel) {
    return this.http.put(`https://event-sourcing.azurewebsites.net/api/products`, product);
  }
}
