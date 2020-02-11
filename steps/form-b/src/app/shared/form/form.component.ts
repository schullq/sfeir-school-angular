import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'sfeir-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css']
})
export class FormComponent implements OnInit, OnChanges {
  @Input() model: any;
  isUpdate: boolean;

  @Output('cancel') cancel$: EventEmitter<any>;
  @Output('submit') submit$: EventEmitter<any>;

  constructor() {
    this.submit$ = new EventEmitter();
    this.cancel$ = new EventEmitter();
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {}

  ngOnChanges(record) {
    console.log('ici');
    if (record.model && record.model.currentvalue) {
      this.model = record.model.currentvalue;
      this.isUpdate = Boolean(this.model);
    }
  }

  cancel() {
    this.cancel$.emit();
  }

  submit() {
    this.submit$.emit(this.model);
  }
}
