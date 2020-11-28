import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input()
  public todo;

  @Output()
  public done = new EventEmitter<any>();

  @HostBinding('class.done')
  public doneState = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('click')
  public onClick(): void {
    this.doneState = !this.doneState;
  }

}
