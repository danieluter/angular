import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      console.error(error);
   
      this.log(`${operation} failed: ${error.message}`);
   
      return of(result as T);
    };
  }

  addHero(hero: Hero): Observable<Hero> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
      .pipe(
        tap(_ => this.log(`added hero w/ id=${hero.id}`)),
        catchError(this.handleError<Hero>('addHero'))
      );
  }

  updateHero(hero: Hero): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put(this.heroesUrl, hero, httpOptions)
      .pipe(
        tap(_ => this.log(`updated hero id=${hero.id}`)),
        catchError(this.handleError<any>(`updateHero id=${hero.id}`))
      );
  }

  deleteHero(hero: Hero): Observable<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.delete<Hero>(url)
      .pipe(
        tap(_ => this.log(`deleted hero id=${hero.id}`)),
        catchError(this.handleError<Hero>(`deleteHero id=${hero.id}`))
      );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url)
      .pipe(
        tap(_ => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }
  
  getHeroes (): Observable<Hero[]> {
    console.log(this.heroesUrl);
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError('getHeroes', []))
      );
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
}
