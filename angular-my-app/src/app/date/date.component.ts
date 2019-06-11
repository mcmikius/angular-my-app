import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  constructor() {
  }
  myEvent(event){
    console.log("event");
  }

  ngOnInit() {
  }

}
