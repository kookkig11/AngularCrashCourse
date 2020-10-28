import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List';
  todos = ['Item 1', 'Item 2', 'Item 3'];
  count = 0;

  clickLike() : void {
    this.count++;
  }
  clickUnLike() : void {
    this.count--;
  }
}
