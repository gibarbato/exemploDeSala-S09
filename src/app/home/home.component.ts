import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  listaProdutos = [
    {
      imagem: 'assets/banana.jpg',
      descricao: 'Banana'
    },
    {
      imagem: 'assets/abacate.jpg',
      descricao: 'Abacate'
    },
    {
      imagem: 'assets/maca.jpg',
      descricao: 'Maça'
    },
    {
      imagem: 'assets/mamao.jpg',
      descricao: 'Mamão'
    },
    {
      imagem: 'assets/pera.jpg',
      descricao: 'Pera'
    },
    {
      imagem: 'assets/uva.jpg',
      descricao: 'Uva'
    }
  ];
}
