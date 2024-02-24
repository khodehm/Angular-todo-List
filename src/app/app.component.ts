import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form-component/form.component';
let _lastId = 0;
function generatedId(): number {
  return (_lastId += 1);
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, FormComponent, FormsModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  title = 'Todo';
  filter: 'all' | 'active ' | 'done' = 'all';
  lableFild = 'hey';
  container = 'container';
  @ViewChild('inputText', { static: false }) inputText: ElementRef;
  constructor(inputText: ElementRef) {
    this.inputText = inputText;
  }
  ngAfterViewInit(): void {
    this.inputText.nativeElement.value = 'alireza';
  }
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
