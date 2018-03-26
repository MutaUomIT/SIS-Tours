import { Component, OnInit } from '@angular/core';
import { PackageData } from './../../configFiles/packegeDetails';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

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
  packageMoreDetails: any=[];
  locationCovered: any=[];
  ativitiesCovered: any=[];
  inclusionList: any=[];
  sliderImagesList: any=[];
  id: number;
  private sub: any;

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
  }

  loadPackageDetails(id){
    for(var i = 0;i < this.packageList.length;i++){
      if(this.packageList[i].id== id){
        this.packageMoreDetails = this.packageList[i];
        this.locationCovered = this.packageMoreDetails.locationCovered;
        this.ativitiesCovered = this.packageMoreDetails.ativitiesCovered;
        this.inclusionList = this.packageMoreDetails.inclusions;
        this.sliderImagesList = this.packageMoreDetails.sliderImages;
      }
    }
  }
}
