import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-profile-preview',
  templateUrl: './profile-preview.component.html',
  styleUrls: ['./profile-preview.component.css']
})
export class ProfilePreviewComponent implements OnInit {
  
  profile: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
  ) { }

  private getProfile(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.profile = hero);
  }

  ngOnInit() {
    this.getProfile();
  }

}
