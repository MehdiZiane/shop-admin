import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'catalogue', pathMatch: 'full' },
  {
    path: 'catalogue',
    loadComponent: () => import('./pages/catalogue/catalogue').then((m) => m.Catalogue),
  },
  {
    path: 'panier',
    loadComponent: () => import('./pages/cart/cart').then((m) => m.Cart),
  },
  {
    path: 'clients',
    loadComponent: () => import('./pages/customers/customers').then((m) => m.Customers),
  },
];
