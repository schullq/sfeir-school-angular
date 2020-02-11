import { Component, OnInit } from '@angular/core';
import { PEOPLE } from '../_static/people';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'sfeir-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  person: any;

  constructor(private http: HttpClient) {}

  /**
   * OnInit implementation
   */
  ngOnInit() {
    this.getPeople();
  }

  /**
   * Returns random people
   */
  random() {
    this.http.get('http://localhost:9000/api/peoples/random').subscribe(r => {
      this.person = r;
    });
  }

  getPeople() {
    this.http.get('http://localhost:9000/api/peoples').subscribe(r => {
      this.person = r[0];
    });
  }
}
