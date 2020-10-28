import { Injectable } from '@angular/core';
import { Todo } from './app.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  constructor(private http: HttpClient) { }

  getTodoList() : Observable<Todo[]> {
    // request data from server :: GET
    const url = 'https://jsonplaceholder.typicode.com/todos?userId=1';
    return this.http.get<Todo[]>(url);

    // return this.todos;
  }
}
