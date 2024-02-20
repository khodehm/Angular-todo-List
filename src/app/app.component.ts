import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { item } from './model';
import { NgFor } from '@angular/common';
let _lastId = 0;
function generatedId(): number {
  return (_lastId += 1);
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Todo';
  filter: 'all' | 'active ' | 'done' = 'all';
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
  addItems(description: string) {
    this.tasks.unshift({
      id: generatedId(),
      description,
      done: false,
    });
  }
}
