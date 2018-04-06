import { Component, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('f') inquiryForm : NgForm
  @ViewChild('f2') inquiryForm2 : NgForm

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

  DateArrive: Date = new Date();
  DateArrive2: Date = new Date();
  minDate = new Date();
  dateArrival : any;
  dateArrival2 : any;
  countryList : any = [];
  selectedCountry : any;
  selectedCountry2 : any;

  constructor(private datePipe: DatePipe, private route: ActivatedRoute, private router:Router ) {}

  ngOnInit() {
    this.countryList = CountryList.countryListWithPhoneCode;
    this.packageDetails = PackageData.packageList;
    this.packageImageSlider();
    this.getPackageList();
    window.scroll(0,0);

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });

    this.loadPackageDetails(this.id);

  }

  setCountryCode(type,obj){
    if(type === 'fullDescribed'){
      if(obj===null){
        this.inquiryForm.form.patchValue({code:''});
        this.inquiryForm.form.patchValue({mobile:''});
      }else{
        this.inquiryForm.form.patchValue({code: obj.code})
      }
    }else if(type === 'lessDescribed'){
      if(obj===null){
        this.inquiryForm2.form.patchValue({code2:''});
        this.inquiryForm2.form.patchValue({mobile2:''});
      }else{
        this.inquiryForm2.form.patchValue({code2: obj.code})
      }
    }
  }

  resetForm(type){
    if(type === 'fullDescribed'){
      this.inquiryForm.reset();
      this.inquiryForm.form.patchValue({package:'default'})
    }else if(type === 'lessDescribed'){
      this.inquiryForm2.reset();
      this.inquiryForm2.form.patchValue({package:'default'})
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

}


