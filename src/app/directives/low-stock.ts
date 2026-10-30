import { computed, Directive, input } from '@angular/core';

@Directive({
  selector: '[appLowStock]',
  host: {
    '[style.border]': 'estFaible() ? "2px solid #d32f2f" : null',
    '[style.backgroundColor]' : 'estFaible() ? "#ffebee" : null',
  },
})
export class LowStock {
  stock = input.required<number>({alias : 'appLowStock'});
  seuil = input(3);

  estFaible = computed(() => this.stock() <= this.seuil());
}
