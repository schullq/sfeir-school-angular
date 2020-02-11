import { FormControl } from '@angular/forms';

export class CustomValidators {
  static sfeirEmail(control: FormControl) {
    const regex = /^.*\@sfeir\.com/;
    console.log(regex.test(control.value));
    return regex.test(control.value) ? null : { sfeirEmail: true };
  }
}
