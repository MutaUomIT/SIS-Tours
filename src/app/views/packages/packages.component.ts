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

  packageList: any=[];
  packageDetails;

  constructor() {}

  ngOnInit() {
    this.packageDetails = PackageData.packageList;
    this.packageImageSlider();
    // this.initJqueryFunctions();
    this.loadPackages();
  }

  // package Details slider
  packageImageSlider(){
  $(document).ready(function () {
  $('.package-details-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
      });
    });
  }

  // initJqueryFunctions(){
  //   $("#slideshow > div:gt(0)").hide();
  //
  //   setInterval(function() {
  //     $('#slideshow > div:first')
  //       .fadeOut(1000)
  //       .next()
  //       .fadeIn(1000)
  //       .end()
  //       .appendTo('#slideshow');
  //   },  3000);
  // }

  private loadPackages(){
    this.packageList = PackageData.packageList;
  }

}
