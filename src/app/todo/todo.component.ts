import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
let _lastId = 0;
function generatedId(): number {
  return (_lastId += 1);
}
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  title = 'Todo';
  filter: 'all' | 'active ' | 'done' = 'all';
  lableFild = 'hey';
  container = 'container';
  tasks = [
    {
      id: 1,
      description: 'task 1',
      done: true,
    },
    {
      id: 2,
      description: 'task 2',
      done: false,
    },
  ];

  get the_item() {
    if (this.filter === 'all') {
      return this.tasks;
    }
    return this.tasks.filter((item) =>
      this.filter === 'done' ? item.done : !item.done
    );
  }
  sateToggle() {
    this.tasks.map((item) => {
      if (item.done) {
        let done = item.description;
      } else if (!item.done) {
        let not_compleated = item.description;
      }
    });
  }
  addItems(description: string) {
    this.tasks.unshift({
      id: generatedId(),
      description,
      done: false,
    });
  }
}
