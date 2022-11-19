import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart-menu',
  templateUrl: './cart-menu.component.html',
  styleUrls: ['./cart-menu.component.scss']
})
export class CartMenuComponent implements OnInit {

  @Input() isActive: boolean = false;
  @Output() closeCart = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.closeCart.emit()
  }
}
