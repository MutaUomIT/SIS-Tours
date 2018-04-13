import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-about-sis',
  templateUrl: './about-sis.component.html',
  styleUrls: []
})
export class AboutSisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initJqueryFunctions();
    window.scroll(0,0);
  }

  initJqueryFunctions(){}
}
