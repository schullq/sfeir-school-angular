import { Component, OnInit, Output, Input, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'sfeir-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css']
})
export class FormComponent implements OnInit, OnChanges {
  @Input() model: any;
  isUpdateMode: boolean;
  editForm: FormGroup;

  @Output('cancel') cancel$: EventEmitter<any>;
  @Output('submit') submit$: EventEmitter<any>;

  constructor() {
    this.submit$ = new EventEmitter();
    this.cancel$ = new EventEmitter();
    this.model = { address: {} };
    this.editForm = new FormGroup({
      id: new FormControl(''),
      firstname: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
      lastname: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      photo: new FormControl('https://randomuser.me/api/portraits/lego/6.jpg'),
      address: new FormGroup({
        street: new FormControl(''),
        postalCode: new FormControl(''),
        city: new FormControl('')
      }),
      phone: new FormControl('', Validators.compose([Validators.required, Validators.pattern('\\d{10}')])),
      isManager: new FormControl('')
    });
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {}

  /**
   * Function to handle component update
   *
   * @param record
   */
  ngOnChanges(record) {
    if (record.model && record.model.currentValue) {
      this.model = record.model.currentValue;
      this.isUpdateMode = Boolean(this.model);
      this.editForm.patchValue(this.model);
    }
  }
  cancel() {
    this.cancel$.emit();
  }

  submit() {
    this.submit$.emit(this.model);
  }
}
