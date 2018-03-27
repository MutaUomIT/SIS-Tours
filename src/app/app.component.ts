import { Component } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

 constructor() {
    this.initJqueryFunctions();
  }

  initJqueryFunctions(){

  }
}


$(document).ready(function () {
  $('.navbar-nav .openBtn').click(function () {
    $('.overlay').css("display", "block");
  })

  $('.overlay .closebtn').click(function () {
    $('.overlay').css("display", "none");
  })

});

