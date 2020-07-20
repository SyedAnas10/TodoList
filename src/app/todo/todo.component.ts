import { TodoItem } from './../todo-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  toDoListArray: any[];
  count: number;

  constructor() {
    this.count = 0;
    this.toDoListArray = [];
  }

  ngOnInit(): void {}

  onAdd(itemTitle) {
    if (itemTitle != null) {
      this.toDoListArray.push(new TodoItem(this.count, false, itemTitle));
      this.count++;
    }
  }
  alterCheck(id) {
    console.log('qwerty');
    this.toDoListArray.forEach((element) => {
      if (id == element.id) {
        element.check = true;
      }
    });
  }

  onDelete(id) {
    console.log(id);
    this.toDoListArray = this.toDoListArray.filter(({ id }) => id !== id);
  }
}
