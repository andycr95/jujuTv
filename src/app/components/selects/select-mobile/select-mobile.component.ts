import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { filter } from 'src/app/interfaces/character';

@Component({
  selector: 'app-select-mobile',
  templateUrl: './select-mobile.component.html',
  styleUrls: ['./select-mobile.component.sass']
})
export class SelectMobileComponent implements OnInit {

  @Input()
  label: string = ''
  
  @Input()
  mobile: boolean = false

  @Input()
  options: filter[] | any = []

  @Output() open: EventEmitter<{}> = new EventEmitter();

  public show: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  selectOpt(opt: any){
    this.show = !this.show;
    opt.label = this.label
    this.label = opt.name
    this.open.emit(opt)
  }
}
