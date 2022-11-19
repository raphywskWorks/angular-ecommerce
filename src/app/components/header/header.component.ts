import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartIsActive = false;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  toggleCart() {
    this.cartIsActive = !this.cartIsActive
  }

}
