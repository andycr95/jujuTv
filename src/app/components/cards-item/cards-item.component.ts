import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/interfaces/character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-cards-item',
  templateUrl: './cards-item.component.html',
  styleUrls: ['./cards-item.component.sass']
})
export class CardsItemComponent implements OnInit {


  @Input()
  item: Character | any;

  @Output() getLocation: EventEmitter<string> = new EventEmitter();

  public episode = ''

  constructor(private characterService: CharacterService, private router: Router) { }

  ngOnInit(): void {
    this.getEpisode()
  }

  location(url: string){
    let lastIndex = url.lastIndexOf("/");
    let id = url.substring(lastIndex+1, url.length);
    this.getLocation.emit(id)
  }

  getEpisode() {
    let lastIndex = this.item.episode[0].lastIndexOf("/");
    let id = this.item.episode[0].substring(lastIndex+1, this.item.episode[0].length);
    this.characterService.getEpisode(id).subscribe((res) => {
      this.episode = res.name
    })
  }

  goToDetail(){
    this.router.navigate([`detail/${this.item.id}`])
  }
  
}
