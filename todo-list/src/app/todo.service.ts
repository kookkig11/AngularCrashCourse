import { Injectable } from '@angular/core';
import { Todo } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos : Todo[] = [
    {
      userId : 1,
      id : 1,
      title : 'Todo 1',
      completed : true
    },
    {
      userId : 2,
      id : 2,
      title : 'Todo 2',
      completed : false
    },
    {
      userId : 3,
      id : 3,
      title : 'Todo 3',
      completed : false
    }
  ];

  constructor() { }

  getTodoList() : Todo[] {
    return this.todos;
  }
}
