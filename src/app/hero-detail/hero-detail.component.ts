import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero.name == "") {
      return;
    }

    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

  delete(hero: Hero): void {
    this.heroService.deleteHero(this.hero)
      .subscribe(() => this.goBack());
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getHero();
  }

}
