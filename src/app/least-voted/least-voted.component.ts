import { Component } from '@angular/core';

@Component({
  selector: 'app-least-voted',
  templateUrl: './least-voted.component.html',
  styleUrls: ['./least-voted.component.scss']
})
export class LeastVotedComponent {
  private mealsList = [
    {
      name: 'Prato 10',
      votes: '12 Votos',
      imageUri: 'assets/meals/07.jpeg'
    },
    {
      name: 'Prato 11',
      votes: '15 Votos',
      imageUri: 'assets/meals/03.jpeg'
    },
    {
      name: 'Prato 12',
      votes: '17 Votos',
      imageUri: 'assets/meals/05.jpeg'
    }
  ];
}
