import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
    product;
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group(
    {
    name:'',
    address:''
  }
  );
  
  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,) {}

  onSubmit(): void {
    //Process Checkout Data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submited',
    this.checkoutForm.value);
    this.checkoutForm.reset();
  }




}
