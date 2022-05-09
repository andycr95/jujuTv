import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Location } from "../../interfaces/location";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  @Input()
  location: Location | any = {}


  @Output() show: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  setShow(){
    this.show.emit()
  }

}
