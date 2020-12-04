import { Todo } from './todo';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  create(todo: Todo): Observable<Todo> {
    return of({ id: 1, name: 'Wäsche waschen', done: true });
  }

  get(todoId: number): Observable<Todo> {
    return of({ id: 1, name: 'Wäsche waschen', done: true });
  }

  getAll(): Observable<Todo[]> {
    return of([
      { id: 1, name: 'Wäsche waschen', done: true },
      { id: 2, name: 'Straße kehren', done: false },
      { id: 3, name: 'Aufräumen', done: true }
    ]);
  }

  update(todo: Todo): Observable<void> {
    return of();
  }

  delete(todoId: number): Observable<void> {
    return of();
  }

}
