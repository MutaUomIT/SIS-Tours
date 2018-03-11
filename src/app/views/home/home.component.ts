import { Component, OnInit } from '@angular/core';
import {PackageData} from "../../configFiles/packegeDetails";
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  packageList: any=[];
  packageDetails;

  constructor() {}

  ngOnInit() {
    this.packageDetails = PackageData.packageList;
    this.initJqueryFunctions();
    this.loadPackages();
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

  private loadPackages(){
    this.packageList = PackageData.packageList;
  }

}
