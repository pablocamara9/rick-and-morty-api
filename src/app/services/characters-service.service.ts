import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character, CharacterListResponse } from '../interfaces/characters.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CharactersServiceService {

  constructor(private http: HttpClient) { }

  getCharacterList(): Observable<CharacterListResponse> {
    return this.http.get<CharacterListResponse>('https://rickandmortyapi.com/api/character');
  }
}
