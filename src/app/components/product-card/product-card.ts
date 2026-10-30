import { Component, input, output, signal } from '@angular/core';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { Product } from '../../models/product';
import { StockLabelPipe } from '../../pipes/stock-label-pipe';
import { LowStock } from '../../directives/low-stock';
import { CartItem } from '../../models/cart-item';
import { QuantityPicker } from '../quantity-picker/quantity-picker';

@Component({
  imports: [CurrencyPipe, TitleCasePipe, StockLabelPipe, LowStock, QuantityPicker],
  selector: 'app-product-card',
  styleUrl: './product-card.scss',
  templateUrl: './product-card.html',
})
export class ProductCard {
  product = input.required<Product>();
  addToCart = output<CartItem>();

  quantite = signal(1);

  ajouter(){
    this.addToCart.emit({product: this.product(), quantity: this.quantite()});
    this.quantite.set(1);
  }
}
