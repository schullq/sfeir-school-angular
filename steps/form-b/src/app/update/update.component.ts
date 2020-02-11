import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { mergeMap, map } from 'rxjs/operators';

const BASE_URL = 'http://localhost:9000';

@Component({
  selector: 'sfeir-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  person: any;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {
    this.person = {
      address: {}
    };
  }

  ngOnInit() {
    this.route.params
      .pipe(
        map((params: any) => params.id),
        mergeMap((id: string) => this.http.get(`${BASE_URL}/api/peoples/${id}`))
      )
      .subscribe((person: any) => (this.person = person));
  }

  submit(person: any) {
    this.http.put(`${BASE_URL}/api/peoples/${person.id}`, person).subscribe(() => this.router.navigate(['/people']));
  }

  cancel() {
    this.router.navigate(['/people']);
  }
}
