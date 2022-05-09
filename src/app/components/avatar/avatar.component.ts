import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.sass']
})
export class AvatarComponent implements OnInit {


  @Input()
  item: String | any;

  public character: Character | any = {}

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.getCharacter()
  }

  getCharacter() {
    let lastIndex = this.item.lastIndexOf("/");
    let id = this.item.substring(lastIndex+1, this.item.length);
    this.characterService.getCharacter(id).subscribe((res) => {
      this.character = res
    })
  }
}
