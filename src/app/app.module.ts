import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { ShoppingComponent } from './modules/shopping/shopping.component';
import { ShoppingDetallComponent } from './modules/shopping/shopping-detall/shopping-detall.component';
import { ShoppingCartComponent } from './modules/shopping/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './modules/shopping/check-out/check-out.component';
import { ContactComponent } from './modules/contact/contact.component';
import { ShoppingFollowComponent } from './modules/shopping/shopping-follow/shopping-follow.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { ForgotPasswordComponent } from './users/forgot-password/forgot-password.component';
import { OrderListComponent } from './admin/order-list/order-list.component';
import { PaymentListComponent } from './admin/payment-list/payment-list.component';
import { AddProductsComponent } from './admin/add-products/add-products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    ShoppingComponent,
    HomeComponent,
    ShoppingDetallComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    ContactComponent,
    ShoppingFollowComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    OrderListComponent,
    PaymentListComponent,
    AddProductsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
