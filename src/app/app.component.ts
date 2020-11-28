import { Component } from '@angular/core';

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
