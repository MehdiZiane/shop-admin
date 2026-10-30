import { Component, input, output } from '@angular/core';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { Product } from '../../models/product';
import { StockLabelPipe } from '../../pipes/stock-label-pipe';
import { LowStock } from '../../directives/low-stock';

@Component({
  imports: [CurrencyPipe, TitleCasePipe, StockLabelPipe, LowStock],
  selector: 'app-product-card',
  styleUrl: './product-card.scss',
  templateUrl: './product-card.html',
})
export class ProductCard {
  product = input.required<Product>();
  addToCart = output<Product>();

  ajouter(){
    this.addToCart.emit(this.product());
  }
}
