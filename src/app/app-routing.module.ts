import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './modules/contact/contact.component';
import { CheckOutComponent } from './modules/shopping/check-out/check-out.component';
import { ShoppingCartComponent } from './modules/shopping/shopping-cart/shopping-cart.component';
import { ShoppingDetallComponent } from './modules/shopping/shopping-detall/shopping-detall.component';
import { ShoppingComponent } from './modules/shopping/shopping.component';
import { ShoppingFollowComponent } from './modules/shopping/shopping-follow/shopping-follow.component';
import { HomeComponent } from './modules/home/home.component';
import { AddProductsComponent } from './admin/add-products/add-products.component';
import { OrderListComponent } from './admin/order-list/order-list.component';
import { PaymentListComponent } from './admin/payment-list/payment-list.component';


const routes: Routes = [

  {path: "shopping", component:ShoppingComponent},
  {path: "shopping-detall", component:ShoppingDetallComponent},
  {path: "shopping-cart", component:ShoppingCartComponent},
  {path: "check-out", component:CheckOutComponent},
  {path: "home", component:HomeComponent},
  {path: "contact", component:ContactComponent},
  {path: "shopping-follow", component :ShoppingFollowComponent},
  {path: "add-products", component :AddProductsComponent},
  {path: "order-list", component :OrderListComponent},
  {path: "payment-list", component :PaymentListComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
