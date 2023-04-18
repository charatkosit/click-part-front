import { Component } from '@angular/core';
import { CartService } from 'src/service/cart.service';
import { Product } from 'src/interfaces/product.interface';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  cartItems: Product[];
  

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getItems();
  }

  removeFromCart(item: Product) {
    this.cartService.removeItem(item);
  }

  updateQuantity(item: Product) {
    this.cartService.updateQuantity(item, item.quantity);
  }

  getTotal(){
    this.cartItems.reduce((acc, item) => acc + (item.SL_Price * item.quantity), 0);
  }

  clearCart() {
    this.cartItems = this.cartService.clearCart();
  }
 
}
