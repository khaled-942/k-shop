import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss'],
})
export class AlertsComponent implements OnInit {
  logIn: boolean = false;
  showLogIn: boolean = false;
  ifOrder: boolean = false;
  constructor(private account: AccountService, private cart : CartService, private route:Router) {}
  ngOnInit(): void {
    this.account.alertLogedInObs.subscribe((data) => {
      this.logIn = data;
    });
    this.cart.orderPlacedObs.subscribe((data) => {
      this.ifOrder = data;
    });
  }
  toLogIn(){
    this.account.alertLogedIn.next(false);
    this.route.navigate(['/login']);
  }
  forOrder(){
    this.cart.orderPlaced.next(false);
    this.route.navigate(['/Products']);
  }
}
