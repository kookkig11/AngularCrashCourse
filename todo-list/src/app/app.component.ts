import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List';
  todos : Todo[] = [
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
  
  count = 0;
  clickLike() : void {
    this.count++;
  }
  clickUnLike() : void {
    this.count--;
  }
}

interface Todo {
  userId : number;
  id : number;
  title : string;
  completed : boolean;
}