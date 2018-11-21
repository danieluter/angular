import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ProfilePreviewComponent } from './profile-preview/profile-preview.component';

const routes: Routes = [
  { path: '', redirectTo: '/profiles', pathMatch: 'full' },
  { path: 'profiles', component: HeroesComponent },
  { path: 'profile/:id', component: HeroDetailComponent },
  { path: 'profile', redirectTo: '/profiles', pathMatch: 'full' },
  { path: 'dashboard/:id', component: ProfilePreviewComponent },
  { path: 'dashboard', redirectTo: '/profiles', pathMatch: 'full' },
  { path: '**', redirectTo: '/profiles' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
