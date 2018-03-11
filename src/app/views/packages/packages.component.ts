import { Component, OnInit } from '@angular/core';
import { PackageData } from './../../configFiles/packegeDetails';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  packageDetails;
  constructor() {}

  ngOnInit() {
    this.packageDetails = PackageData.packageList;
    this.initJqueryFunctions();
  }

  initJqueryFunctions(){
    $("#slideshow > div:gt(0)").hide();

    setInterval(function() {
      $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
    },  3000);
  }



}
