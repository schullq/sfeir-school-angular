import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'sfeir-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  person;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:9000/api/peoples/').subscribe(people => (this.person = people));
  }
}
