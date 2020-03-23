import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/models/cart-product'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  checkoutProducts: CartProduct[];
  totalPrice: number = 0;
  userName: any;
  constructor( private router: Router,) {
    const products = JSON.parse(localStorage.getItem('Cart'));
    const user = JSON.parse(localStorage.getItem('user'));
    this.userName = user;
    this.checkoutProducts = products;
    products.forEach((product) => {
			this.totalPrice += product.Price;
		});
  }

  ngOnInit() {
  }


  checkUserLog(){
    if(this.userName){
      this.router.navigate(['/checkout/customer-information']);
    }else{
      this.router.navigate(['/customer/login']);
    }
    
  }
}
