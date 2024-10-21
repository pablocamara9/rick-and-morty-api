import { Component, OnInit } from '@angular/core';
import { Character } from '../../interfaces/characters.interfaces';
import { CharactersServiceService } from '../../services/characters-service.service';

@Component({
  selector: 'app-characters-list-component',
  templateUrl: './characters-list-component.component.html',
  styleUrl: './characters-list-component.component.css'
})
export class CharactersListComponentComponent implements OnInit {

  listadoPersonajes: Character[] = [];

  constructor(private characterservice:CharactersServiceService) { }
  ngOnInit(): void {
    this.characterservice.getCharacterList().subscribe(respuesta => {
      this.listadoPersonajes = respuesta.results;
    })
  }

}
