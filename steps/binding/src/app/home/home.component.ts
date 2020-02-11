import { Component, OnInit } from '@angular/core';
import { People } from '../people.model';
import { PEOPLE } from '../_static/people';

@Component({
  selector: 'sfeir-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  name: string;
  person: People;

  constructor() {
    this.name = 'Angular';
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
    this.getPerson(null);
  }

  getPerson(id: string) {
    if (id === null || id === '') {
      this.person = PEOPLE[0];
    } else {
      this.person = PEOPLE.find(x => x.id === id);
    }
  }
}
