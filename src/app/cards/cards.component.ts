import {Component} from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent  {


  cardItem = {
    title: 'Frontend',
    name: 'Mehmet Sert',
    phone: '0555 555 55 88',
    email: 'info@mehmetsert.com',
    address: 'Orhangazi, Bursa',
  };

}
