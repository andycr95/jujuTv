import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character, CharacterResponse, FilterOpt } from '../interfaces/character';
import { Episode } from '../interfaces/episode';
import { Location } from '../interfaces/location';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  
  readonly URL_API =  'https://rickandmortyapi.com/api';

  constructor(
    private http: HttpClient
  ) { }

  public getAll(page: number): Observable<CharacterResponse>{
    return this.http.get<CharacterResponse>(`${this.URL_API}/character/?page=${page}`);
  }

  public getWithfilters(filter:FilterOpt | null, page: string, name: string): Observable<CharacterResponse>{
    return this.http.get<CharacterResponse>(`${this.URL_API}/character/?page=${page}${name && '&name='+name}${filter?.species && '&spices='+filter.species}${filter?.status && '&status='+filter.status}${filter?.gender && '&gender='+filter.gender}`);
  }

  public getWithName(page: number, name: string): Observable<CharacterResponse>{
    return this.http.get<CharacterResponse>(`${this.URL_API}/character/?page=${page}${'&name='+name}`);
  }

  public getEpisode(id: string): Observable<Episode>{
    return this.http.get<Episode>(`${this.URL_API}/episode/${id}`);
  }

  public getCharacter(id: string): Observable<Character>{
    return this.http.get<Character>(`${this.URL_API}/character/${id}`);
  }

  public getLocation(id: string): Observable<Location>{
    return this.http.get<Location>(`${this.URL_API}/location/${id}`);
  }
}
