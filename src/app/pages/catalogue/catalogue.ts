import { Component, computed, signal } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCard } from '../../components/product-card/product-card';
import { CartItem } from '../../models/cart-item';

@Component({
  imports: [ProductCard],
  selector: 'app-catalogue',
  styleUrl: './catalogue.scss',
  templateUrl: './catalogue.html',
})
export class Catalogue {
    produits = signal<Product[]>([
    { id: 1, name: 'clavier mécanique', price: 89.9, stock: 12, category: 'Informatique', imageUrl: 'https://picsum.photos/id/180/200/150' },
    { id: 2, name: 'souris sans fil', price: 29.5, stock: 2, category: 'Informatique', imageUrl: 'https://picsum.photos/id/0/200/150' },
    { id: 3, name: 'écran 27 pouces', price: 249, stock: 5, category: 'Informatique', imageUrl: 'https://picsum.photos/id/1/200/150' },
    { id: 4, name: 'lampe de bureau', price: 34.9, stock: 8, category: 'Maison', imageUrl: 'https://picsum.photos/id/20/200/150' },
    { id: 5, name: 'cafetière', price: 59, stock: 3, category: 'Maison', imageUrl: 'https://picsum.photos/id/24/200/150' },
    { id: 6, name: 'ballon de foot', price: 19.9, stock: 20, category: 'Sport', imageUrl: 'https://picsum.photos/id/26/200/150' },
    { id: 7, name: 'tapis de yoga', price: 24.9, stock: 1, category: 'Sport', imageUrl: 'https://picsum.photos/id/30/200/150' },
    { id: 8, name: 'haltères 10 kg', price: 45, stock: 6, category: 'Sport', imageUrl: 'https://picsum.photos/id/40/200/150' },
    { id: 9, name: 'café en grains', price: 14.5, stock: 15, category: 'Alimentation', imageUrl: 'https://picsum.photos/id/60/200/150' },
    { id: 10, name: 'chocolat noir', price: 3.2, stock: 0, category: 'Alimentation', imageUrl: 'https://picsum.photos/id/119/200/150' },
  ]);

  compteur = signal(0);
  dernierAjout = signal('aucun');
  ajouter(item: CartItem) {
    this.compteur.update((n) => n + item.quantity);
    this.dernierAjout.set(`${item.quantity} x ${item.product.name}`);
  }

  categories = ['Informatique', 'Maison', 'Sport', 'Alimentation'];
  selection = signal('Toutes');

  produitsFiltres = computed(() => {
    const cat = this.selection();
    return cat === 'Toutes' ? this.produits()
      : this.produits().filter((p) => p.category === cat);
  });
}
