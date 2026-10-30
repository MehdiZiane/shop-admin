import { Component, input, model } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-quantity-picker',
  styleUrl: './quantity-picker.scss',
  templateUrl: './quantity-picker.html',
})
export class QuantityPicker {
  value = model(1);
  max = input(99);

  moins(){
    this.value.update((v)=>Math.max(1, v-1));
  }

  plus(){
    this.value.update((v)=> Math.min(this.max(), v+1));
  }
}
