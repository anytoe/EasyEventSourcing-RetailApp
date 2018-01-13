import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductReadModel } from '../models/products.model';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<ProductReadModel[]>(`http://localhost:50158/api/products/`);
  }

  get(id: string) {
    return this.http.get<ProductReadModel>(`http://localhost:50158/api/products/${id}`);
  }

  create() {
    return this.http.post(`http://localhost:50158/api/products`, null);
  }

  update(product: ProductReadModel) {
    return this.http.put(`http://localhost:50158/api/products`, product);
  }
}
