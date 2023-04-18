import { Injectable } from '@angular/core';
import { Product } from 'src/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  addItem(item: Product) {
    this.items.push(item);
  }

  removeItem(item: Product) {
    const index = this.items.indexOf(item);
    if (index >= 0) {
      this.items.splice(index, 1);
    }
  }

  updateQuantity(item: Product, quantity: number) {
    item.quantity = quantity;
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
