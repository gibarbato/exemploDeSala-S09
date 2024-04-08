import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';

export const routes: Routes = [
  {
    path: '', // ou path:'home'
    component: HomeComponent
  },
  {
    path: 'card', // ou path:'home'
    component: CardComponent
  },

];
