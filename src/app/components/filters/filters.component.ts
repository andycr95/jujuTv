import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { gender, spices, status } from 'src/app/data/filters';
import { filter, FilterOpt } from 'src/app/interfaces/character';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.sass']
})
export class FiltersComponent implements OnInit {
  species: filter[] = spices
  genders: filter[] = gender
  status: filter[] = status
  show: boolean = false
  specie: string = ''
  gender: string = ''
  state: string = ''
  name = ''
  
  @Input()
  filter = {}

  @Output() getWithFilter: EventEmitter<FilterOpt> = new EventEmitter();
  @Output() getWithFilterName: EventEmitter<string> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  setFilter() {
    this.getWithFilter.emit({
      species: this.specie,
      gender: this.gender,
      status: this.state
    })
    this.show = false
  }

  setFilterName() {
    this.getWithFilterName.emit(this.name)
  }

  getFilter(e: any, type: boolean = false){
    switch (e.label) {
      case 'Especie':
        this.specie = e.value
        if(type) this.setFilter() 
        break;
      case 'Genero':
        this.gender = e.value
        if(type) this.setFilter() 
        break;
      case 'Estado':
        this.state = e.value
        if(type) this.setFilter() 
        break;
    
      default:
        break;
    }
  }

}
