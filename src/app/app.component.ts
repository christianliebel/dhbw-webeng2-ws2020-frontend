import { TodoService } from './todo.service';
import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public value = 'Hello!';
  public color = 'cornflowerblue';
  public numericValue = 3.14159265;
  public myTodo = { name: 'Review durchführen', done: false, id: 3 };
  public todos: Todo[];

  constructor(todoService: TodoService) {
    todoService.getAll().subscribe(todos => this.todos = todos);
  }

  public onClick(event: MouseEvent): void {
    // event.clientX + "," + event.clientY
    alert(`${event.clientX},${event.clientY}`);
  }

  public onMouseMove(event: MouseEvent): void {
    console.log(`${event.clientX},${event.clientY}`);
  }

  public onDone(todo: any): void {
    console.log(todo);
  }
}
