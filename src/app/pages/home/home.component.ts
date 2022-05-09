import { Component, OnInit } from '@angular/core';
import { Character, CharacterResponse, filter, FilterOpt } from 'src/app/interfaces/character';
import { Location } from 'src/app/interfaces/location';
import { CharacterService } from 'src/app/services/character.service';
import { spices, gender, status } from "../../data/filters";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public characters: Character[] = [];
  public location: Location | any = {};
  public page: number = 1;
  public pages: number | null = null;
  public show: boolean = false;
  public filter = {}
  public name: string = ''
  public loading: boolean = false


  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.getAll()
  }
  
  closeModal(){
    this.show = false
  }

  async getAll(){
    this.loading = true
    this.characterService.getAll(this.page).subscribe((res:CharacterResponse) =>{
      this.characters = res.results
      this.pages = res.info.pages
      this.loading = false
    })
  }

  async getMore(){
    this.page = this.page+1
    if (this.name === '') {
      this.loading = true
      this.characterService.getAll(this.page).subscribe((res:CharacterResponse) =>{
        this.pages = res.info.pages
        for (let i = 0; i < res.results.length; i++) {
          const c = res.results[i];
          this.characters.push(c)
        }
        this.loading = false
      })
    } else this.getWithFilterName(this.name, true)
  }

  getWithFilter(filter: FilterOpt){
    this.loading = true
    this.characterService.getWithfilters(filter, '1', '').subscribe((res:CharacterResponse) =>{
      this.characters = res.results
      this.loading = false
    })
  }

  getWithFilterName(filter: string, type: boolean = false){
    this.loading = true
    this.name = filter
    this.characterService.getWithName(this.page, this.name).subscribe((res:CharacterResponse) =>{
      this.pages = res.info.pages
      if (type) {
        for (let i = 0; i < res.results.length; i++) {
          const c = res.results[i];
          this.characters.push(c)
        }
      }  else this.characters = res.results
      this.loading = false
    })
  }

  getLocation(id: string){
    this.characterService.getLocation(id).subscribe((res:Location) =>{
      this.location = res
      this.show = true
    })
  }
}
