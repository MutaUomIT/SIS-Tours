import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-leisure',
  templateUrl: './leisure.component.html',
  styleUrls: ['./leisure.component.css']
})
export class LeisureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initJqueryFunctions();
    window.scroll(0,0);
  }

  initJqueryFunctions(){}

}
