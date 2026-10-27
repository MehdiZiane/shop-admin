import { Component, signal } from '@angular/core';
import { Product } from '../../models/product';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe, TitleCasePipe],
  selector: 'app-catalogue',
  styleUrl: './catalogue.scss',
  templateUrl: './catalogue.html',
})
export class Catalogue {
  produit: Product = {
    id : 1,
    name: 'clavier mecanique',
    price: 89.9,
    stock: 12,
    category:'Informatique',
    imageUrl:'https://picsum.photos/id/180/200/150',
  };

  compteur = signal(0);
  ajouter() {
    this.compteur.update((n) => n + 1);
  }
}
