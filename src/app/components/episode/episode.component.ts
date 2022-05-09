import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character';
import { Episode } from 'src/app/interfaces/episode';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.sass']
})
export class EpisodeComponent implements OnInit {
  @Input()
  item: string | any;

  public episode: Episode | undefined;

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.getEpisode()
  }



  getEpisode() {
    let lastIndex = this.item.lastIndexOf("/");
    let id = this.item.substring(lastIndex+1, this.item.length);
    this.characterService.getEpisode(id).subscribe((res) => {
      this.episode = res
    })
  }
}
