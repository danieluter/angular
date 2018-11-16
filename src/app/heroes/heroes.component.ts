import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  getHeroes(): void {
    this.heroSerivce.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  
  constructor(private heroSerivce: HeroService, private messageService: MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }

}
