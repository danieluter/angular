import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mieszko Pierwszy' },
      { id: 12, name: 'Bolesław Chrobry' },
      { id: 13, name: 'Kazimierz Wielki' },
    ];
    const test = [
      { id: 11, name: '1' },
      { id: 12, name: '2' },
      { id: 13, name: '3' },
      { id: 14, name: '4' }
    ];
    return {heroes, test};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

}
