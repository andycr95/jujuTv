import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/interfaces/character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {
  public character: Character | undefined;
  public loading: boolean = false

  constructor(private activeRoute: ActivatedRoute, private characterService: CharacterService){
    this.activeRoute.paramMap
      .subscribe((params:any) => {
        this.getCharacter(params.params.id)
      }
    );
    
  }

  ngOnInit(): void {
  }

  async getCharacter(id: string){
    this.loading = true
    await this.characterService.getCharacter(id).subscribe((res:Character) =>{
      this.character = res
      this.loading = false
    })
  }

}
