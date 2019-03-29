import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewChildComponent } from '../new-child/new-child.component';
@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {

  id: any;
  color: any = 'grey';
  birthday: Date = new Date('12/03/1985');

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getQueryParamAndDisplay();
  }

  getQueryParamAndDisplay() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  sayHi(msg) {
    alert (msg);
  }
}
