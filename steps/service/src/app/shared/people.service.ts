import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

const BASE_URL = 'http://localhost:9000';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  constructor(private http: HttpClient) {}

  fetch(): Observable<any> {
    console.log('fetch');
    return this.http.get(`${BASE_URL}/api/peoples/`);
  }

  fetchOne(id: string): Observable<any> {
    console.log('fetchOne');
    return this.http.get(`${BASE_URL}/api/peoples/${id}`);
  }

  fetchRandom(): Observable<any> {
    console.log('fetchRandom');
    return this.http.get(`${BASE_URL}/api/peoples/random`);
  }

  delete(person: any): Observable<any> {
    console.log('delete');
    return this.http.delete(`${BASE_URL}/api/peoples/${person.id}`);
  }

  add(person: any): Observable<any> {
    console.log('add');
    return this.http.post(`${BASE_URL}/api/peoples/`, person).pipe(mergeMap(() => this.fetch()));
  }

  update(person: any): Observable<any> {
    console.log('update');
    return this.http.put(`${BASE_URL}/api/peoples/${person.id}`, person);
  }
}
