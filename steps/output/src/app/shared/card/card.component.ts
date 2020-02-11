import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sfeir-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css']
})
export class CardComponent implements OnInit {
  @Input() person: any;
  @Output('personDelete') delete$: EventEmitter<any>;

  constructor() {
    this.person = {};
    this.delete$ = new EventEmitter();
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {}

  delete(person: any) {
    this.delete$.emit(person);
  }
}
