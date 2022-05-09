import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from 'src/app/interfaces/character';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.sass']
})
export class CardListComponent implements OnInit {


  @Input()
  items: Character[] | any;

  @Input()
  loading: Boolean = false;

  @Output() getLocation: EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  
}
