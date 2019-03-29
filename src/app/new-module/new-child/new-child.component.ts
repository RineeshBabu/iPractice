import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-child',
  templateUrl: './new-child.component.html',
  styleUrls: ['./new-child.component.css']
})
export class NewChildComponent implements OnInit {
  @Output() hiFromChild = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }
  sayHiToParent() {
    this.hiFromChild.emit("Hello Parent");
  }

}
