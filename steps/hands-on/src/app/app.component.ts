// create a component  <sfeir-app>

// use app.component.css & html

// set a name attribute to Angular
// use it to say "Hello Angular"

import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'sfeir-app',
  templateUrl: './app.component.html'
})
export class PeopleAppComponent {
  name: string;

  constructor() {
    this.name = 'People';
  }
}

platformBrowserDynamic().bootstrapModule(PeopleAppComponent);
