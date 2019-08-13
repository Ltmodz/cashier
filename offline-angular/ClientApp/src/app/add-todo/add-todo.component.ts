import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  todoForm: FormGroup;
  db: any;
  constructor(private fb: FormBuilder) { 

  }

  ngOnInit() {
    this.todoForm = this.fb.group({
      name: '',
      date: ''
    });
  }

 

}
