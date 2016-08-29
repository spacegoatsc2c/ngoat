import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { Character } from '../character';

@Component({
  moduleId: module.id,
  selector: 'app-roster',
  templateUrl: 'roster.component.html',
  styleUrls: ['roster.component.css']
})
export class RosterComponent implements OnInit {
  public characters:Character[];

  constructor(private characterService:CharacterService) { }

  ngOnInit() {
    this.characterService.getCharacters().then(
      characters => this.characters = characters
    );
  }
}
