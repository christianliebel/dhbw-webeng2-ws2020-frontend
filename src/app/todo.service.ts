import { Todo } from './todo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  create(todo: Todo): Todo {
    return { id: 1, name: 'Wäsche waschen', done: true };
  }

  get(todoId: number): Todo {
    return { id: 1, name: 'Wäsche waschen', done: true };
  }

  getAll(): Todo[] {
    return [
      { id: 1, name: 'Wäsche waschen', done: true },
      { id: 2, name: 'Straße kehren', done: true },
      { id: 3, name: 'Aufräumen', done: true }
    ];
  }

  update(todo: Todo): void {}

  delete(todoId: number): void {}

}
