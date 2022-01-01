import { Component, OnInit } from '@angular/core';

// Todo Model - It can be created seperately and can be exported but for learning purpose I've created here only
class Todo {
  todoItem: string = '';
  itemStatus: boolean = false;
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})

export class TodosComponent implements OnInit {

  todoContent: Todo[] = [];
  inputTodoItem: string = '';

  constructor() { }

  ngOnInit(): void {
    this.todoContent = []
  }

  todoDone(id: number) {
    this.todoContent.map((value, index) => {
      if (index == id) {
        value.itemStatus = !value.itemStatus;
      }
      return value;
    })
  }


  todoDelete(id: number) {
    this.todoContent = this.todoContent.filter((value, index) => index !== id);
  }

  todoInput() {
    this.todoContent.push({ todoItem: this.inputTodoItem, itemStatus: false })
    this.inputTodoItem = '';
  }
}
