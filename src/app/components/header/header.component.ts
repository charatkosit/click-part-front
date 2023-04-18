import { CartService } from 'src/service/cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  
  constructor(private cartService: CartService) {
    
  }
}
