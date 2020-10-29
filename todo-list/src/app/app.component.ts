import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Todo List';

  newTodo : string = "New Item";

  todos : Todo[] = [];

  // TypeScript can make field use on this class :: get private / public
  constructor(private service : TodoService) {
    // private service : TodoService,
    // private userService : UserService,
  }

  ngOnInit(): void {
    // .subscribe() for Observable
    this.service.getTodoList().subscribe((todoList) => {
      this.todos = todoList;
    });

    // this.todos = this.service.getTodoList();
  }

  addNewItem() : void {
    const todoItem : Todo = {
      userId : 1,
      title : this.newTodo, //from input textbox
      completed : false,
    };
    this.service.addTodoItem(todoItem).subscribe(() => {
      alert('Add todo success');
      this.newTodo = '';
    });
  }

  onKeyup(event) {
    this.newTodo = event.target.value;
  }
  
  count = 0;
  clickLike() : void {
    this.count++;
  }
  clickUnLike() : void {
    this.count--;
  }
}

// export for use other file
export interface Todo {
  userId : number;
  id? : number;
  title : string;
  completed : boolean;
}