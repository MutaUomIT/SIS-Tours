import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { PackageData } from './../../configFiles/packegeDetails';
import { DailyActivities } from './../../configFiles/DailyActivities';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  packageList: any=[];
  packageList2: any=[];
  packageDetails;
  packageMoreDetails: any=[];
  locationCovered: any=[];
  ativitiesCovered: any=[];
  inclusionList: any=[];
  sliderImagesList: any=[];
  dayWiseActivityList : any=[];
  id: number;
  private sub: any;
  p : any;
  p2 : any;

  packageItem : number = 1;
  lessPackage : boolean = false;
  morePackage : boolean = true;

  constructor(private route: ActivatedRoute, private router:Router ) {}

  ngOnInit() {
    this.packageDetails = PackageData.packageList;
    this.packageImageSlider();
    this.getPackageList();
    window.scroll(0,0);

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });

    this.loadPackageDetails(this.id);
    this.arrowFunction();
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

  private viewMoreOnPackage(id){
    this.router.navigateByUrl('/packages', {skipLocationChange : true}).then(()=>
    this.router.navigate(["packages",id]));
  }

  private getPackageList(){
    this.packageList = PackageData.packageList;
    this.packageList2 = PackageData.packageList.filter(function(item){
      return item.id === 1 || item.id === 2 || item.id === 3;
    });
  }

  private getActivityList(id){

    for(var i = 0;i < DailyActivities.activityList.length;i++){
      if(id === DailyActivities.activityList[i].id){
        this.dayWiseActivityList = DailyActivities.activityList[i].dayWiseActivities;
      }
    }
  }

  loadPackageDetails(id){
    for(var i = 0;i < this.packageList.length;i++){
      if(this.packageList[i].id== id){
        this.packageMoreDetails = this.packageList[i];
        this.locationCovered = this.packageMoreDetails.locationCovered;
        this.ativitiesCovered = this.packageMoreDetails.ativitiesCovered;
        this.inclusionList = this.packageMoreDetails.inclusions;
        this.sliderImagesList = this.packageMoreDetails.sliderImages;
        this.getActivityList(this.packageMoreDetails.activityListId);
      }
    }
  }

  //show less package list
  onClickMorePackages(){
    if(this.packageItem != 2){
      this.packageItem = this.packageItem + 1;
      this.lessPackage = true;
    }
    if(this.packageItem == 2){
      this.morePackage = false;
    }
  }
  //show more package list
  onClickLessPackages(){
    if(this.packageItem == 2){
      this.packageItem = this.packageItem - 1;
      this.lessPackage = true;
    }
    if(this.packageItem != 2){
      this.morePackage = false;
    }
  }

  // arrow function
  arrowFunction()
  {
    $(document).ready(function () {
      $('.day-button-wrapper button').click(function () {
        $(this).children('span:nth-child(1)').hide('fast');
        $(this).children('span:nth-child(2)').show('fast');

        $(this).parent().addClass('active');
      });

      $('.day-button-wrapper.active button').click(function () {

        $(this).children('span:nth-child(2)').hide('fast');
        $(this).children('span:nth-child(1)').show('fast');
      });
    });
  }
}


