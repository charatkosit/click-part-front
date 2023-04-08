import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'http://localhost:3000/api/v1/products'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.apiUrl);
  }

  getById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  create(product: any) {
    return this.http.post(this.apiUrl, product);
  }

  update(id: number, product: any) {
    return this.http.put(`${this.apiUrl}/${id}`, product);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
