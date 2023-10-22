import {Component, HostListener} from '@angular/core';
import {ElementSelectorService} from "./services/element-selector.service";
import {fromEvent, Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  documentStream = fromEvent('document' as any, 'mousemove');

  title = 'coding-challenge-v2';
  tasks = [
    {
      title: 'task 1',
      completed: false,
    },
    {
      title: 'task 2',
      completed: false,
    },
    {
      title: 'task 3',
      completed: false,
    },
    {
      title: 'task 4',
      completed: false,
    },
  ];

  completedTasks = [
    {
      title: 'task 5',
      completed: false,
    },
    {
      title: 'task 6',
      completed: false,
    },
    {
      title: 'task 7',
      completed: false,
    },
    {
      title: 'task 8',
      completed: false,
    },
  ];

  constructor(
    private elementSelectorService: ElementSelectorService
  ) {
    this.elementSelectorService.start()
  }

  addTask(description: string) {
    this.tasks.push({
      title: description,
      completed: false,
    });
  }

  deleteTask(task: any) {
    let index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}
