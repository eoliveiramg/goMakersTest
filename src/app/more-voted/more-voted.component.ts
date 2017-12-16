import { Component } from '@angular/core';

@Component({
  selector: 'app-more-voted',
  templateUrl: './more-voted.component.html',
  styleUrls: ['./more-voted.component.scss']
})
export class MoreVotedComponent {

  private mealsList = [
    {
      name: 'Prato 1',
      votes: '12 Votos',
      imageUri: 'assets/meals/01.jpeg'
    },
    {
      name: 'Prato 2',
      votes: '15 Votos',
      imageUri: 'assets/meals/02.jpeg'
    },
    {
      name: 'Prato 3',
      votes: '17 Votos',
      imageUri: 'assets/meals/03.jpeg'
    },
    {
      name: 'Prato 4',
      votes: '42 Votos',
      imageUri: 'assets/meals/04.jpeg'
    },
    {
      name: 'Prato 5',
      votes: '35 Votos',
      imageUri: 'assets/meals/05.jpeg'
    },
    {
      name: 'Prato 6',
      votes: '16 Votos',
      imageUri: 'assets/meals/06.jpeg'
    }
  ];
}
