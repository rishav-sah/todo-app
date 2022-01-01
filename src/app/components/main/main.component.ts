import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  headingTitle: string = 'To Do List'; // only string data type can be accepted here which is a TypeScript feature

  constructor() { }

  ngOnInit(): void {
  }

}
