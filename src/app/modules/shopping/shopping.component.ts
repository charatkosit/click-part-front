
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from 'src/service/cart.service';
import { Product } from 'src/interfaces/product.interface'; 
import { ToastrService, ToastrModule } from 'ngx-toastr';
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']                                                                   
})
export class ShoppingComponent implements OnInit {
 

  products: any;


  constructor(private http: HttpClient ,private cartService: CartService,private toastr: ToastrService) { }



  ngOnInit() {
    this.http.get<Product[]>('http://localhost:3000/api/v1/products')
      .subscribe((data) => {
        this.products = data;
      });
  }

 addToCart(product: Product) {
    this.cartService.addItem(product);
    
  }
}
