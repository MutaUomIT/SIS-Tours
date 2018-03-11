import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-about-lanka',
  templateUrl: './about-lanka.component.html',
  styleUrls: ['./about-lanka.component.css']
})
export class AboutLankaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initJqueryFunctions();
  }

  initJqueryFunctions(){}


}
