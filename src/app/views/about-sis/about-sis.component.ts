import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-about-sis',
  templateUrl: './about-sis.component.html',
  styleUrls: ['./about-sis.component.css']
})
export class AboutSisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initJqueryFunctions();
  }

  initJqueryFunctions(){}
}
