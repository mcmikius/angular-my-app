import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  isCollapsed: boolean = true;
  constructor() {
  }
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed
  }
  ngOnInit() {
  }

}
