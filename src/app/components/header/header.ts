import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  titre = 'ShopAdmin';
  panier = signal(0);

  ajouter() {
    this.panier.update((n) => n + 1);
  }

  vider() {
    this.panier.set(0);
  }
}