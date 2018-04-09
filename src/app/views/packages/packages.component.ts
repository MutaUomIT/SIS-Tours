import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {CountryList} from "../../configFiles/countryList";
import { PackageData } from './../../configFiles/packegeDetails';
import { DailyActivities } from './../../configFiles/DailyActivities';
import { DatePipe } from '@angular/common';
import { NgForm } from '@angular/forms';

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

  modalConfig : any ;

  constructor(private datePipe: DatePipe, private route: ActivatedRoute, private router:Router ) {}

  ngOnInit() {
    this.packageDetails = PackageData.packageList;
    this.packageImageSlider();
    this.getPackageList();
    window.scroll(0,0);
    this.arrowAnimation();

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });

    this.loadPackageDetails(this.id);

  }

  private loadFormModal(type : string){
    if(type === 'selected'){
      this.modalConfig =  {
        title : this.packageMoreDetails.mainTopic +' - ' + this.packageMoreDetails.subTopic ,
        isDurationWise : false,
        selectedPackage : this.packageMoreDetails.mainTopic +' - ' + this.packageMoreDetails.subTopic
      }
    }else if(type === 'customize'){
      this.modalConfig = {
        title : "Customized Trip",
        isDurationWise : true,
        selectedPackage : null
      }
    }
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

  // arrow animation

  // arrowAnimation(){
  //   $(document).ready(function () {
  //     $('.day-button-wrapper button').click(function () {
  //       $(this).parent().addClass('active');
  //
  //       $('.day-button-wrapper.active button span i:nth-of-type(1)').hide();
  //       $('.day-button-wrapper.active button span i:nth-of-type(2)').show();
  //     })
  //   })
  //
  //   $(document).ready(function () {
  //     $('.day-button-wrapper.active button').click(function () {
  //       $('.day-button-wrapper.active').removeClass('active');
  //
  //       // $('.day-button-wrapper.active button span i:nth-of-type(1)').hide();
  //       // $('.day-button-wrapper.active button span i:nth-of-type(2)').show();
  //     })
  //
  //   })
  //
  // }

  arrowAnimation(){
    $(document).ready(function () {
      $('.day-button-wrapper button').click(function () {
        $(this).find('span i:nth-of-type(1)').hide();
        $(this).find('span i:nth-of-type(2)').show();
        $(this).parent().addClass('active');

      })

      $('.day-button-wrapper.active button').click(function () {
        console.log("dcdcdc");
        // $(this).parent().removeClass('active');
        // $(this).find('span i:nth-of-type(1)').hide();
        // $(this).find('span i:nth-of-type(2)').show();


      })
    })
  }

}


