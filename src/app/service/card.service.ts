import { Inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Card} from '../models/card';
import {Observable, subscribeOn} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cards!: Card[];

  constructor(
    @Inject('apiUrl') private apiUrl: string,
      private http: HttpClient
  ) { }

  getCards(): void {
    this.http.get<Card[]>(this.apiUrl + '/cards') //2 apiye isteği atıp
     .subscribe((res: Card[]) => {
       this.cards = res; //3- apiden gelen sonucu bastırıyoruz
     });
  }

  addCard(card:Card){
      return this.http.post(this.apiUrl + '/cards', card);
  }

  updateCard(card:Card, cardId:number){
    return this.http.put(this.apiUrl + '/cards/' + cardId , card);
  }

  deleteCard(cardId:number){
    return this.http.delete(this.apiUrl + '/cards/' + cardId)
  }

}
