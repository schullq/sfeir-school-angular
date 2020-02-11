import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { PeopleService } from '../shared/people-service';
import { mergeMap, takeUntil } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import { AppState, LoadPeople, FilterPeople } from '../app.state';

@Component({
  selector: 'sfeir-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit, OnDestroy {
  private addDialog: MatDialogRef<AddDialogComponent>;
  private destroyPeopleSubscription: Subject<Array<Object>> = new Subject<Array<Object>>();
  people;
  search$: Observable<string>;
  dialogStatus = 'inactive';
  view = 'card';

  constructor(public dialog: MatDialog, private _peopleService: PeopleService, private _store: Store) {}

  /**
   * OnInit implementation
   */
  ngOnInit() {
    this._store
      .select(AppState.filteredPeople)
      .pipe(takeUntil(this.destroyPeopleSubscription))
      .subscribe((people: Array<Object>) => (this.people = people));
    this.search$ = this._store.select(AppState.search);
    this._store.dispatch(new LoadPeople());
  }

  ngOnDestroy() {
    this.destroyPeopleSubscription.next();
    this.destroyPeopleSubscription.complete();
  }

  delete(person: any) {
    this._peopleService.delete(person.id).subscribe(people => (this.people = people));
  }

  add(person: any) {
    this._peopleService
      .update(person)
      .pipe(mergeMap(() => this._peopleService.fetch()))
      .subscribe((peopleList: Array<any>) => {
        this.people = peopleList;
        this.hideDialog();
      });
  }

  showDialog() {
    this.dialogStatus = 'active';
    this.addDialog = this.dialog.open(AddDialogComponent, {
      width: '450px',
      data: {}
    });

    this.addDialog.afterClosed().subscribe(person => {
      this.dialogStatus = 'inactive';
      if (person) {
        this.add(person);
      }
    });
  }

  hideDialog() {
    this.dialogStatus = 'inactive';
    this.addDialog.close();
  }

  switchView() {
    this.view = this.view === 'card' ? 'list' : 'card';
  }

  onSearch(search: string) {
    this._store.dispatch(new FilterPeople(search));
  }
}
