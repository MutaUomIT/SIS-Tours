import {Component, OnInit} from '@angular/core';
import {PackageData} from "../../configFiles/packegeDetails";
import {TestimonialData} from "../../configFiles/testimonials";
import { HttpClient } from '@angular/common/http';
import {Router, NavigationEnd} from '@angular/router';
// import {window} from "@angular/platform-browser/src/browser/tools/browser";

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
  testimonialList: any=[];
  testimonials;
  packageMoreDetails: any=[];
  locationCovered: any=[];
  inquiry : any = {};

  constructor(private http: HttpClient, private router:Router) {

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          const element = document.querySelector("#" + tree.fragment);
          if (element) {
            element.scrollIntoView(true);
          }
        }
      }
    });

  }

  sendInquiry(){

    var emailHtml = {
      mailBody : '<p><bold>Package :</bold>'+this.inquiry.package+'</p><br/><p><bold>ArrivalDate :</bold>'+this.inquiry.arrivalDate+'</p><br/><p><bold>Country :</bold>'+this.inquiry.country+'</p><br/><p><bold>Name :</bold>'+this.inquiry.name+'</p><br/><p><bold>Mobile :</bold>'+this.inquiry.mobile+'</p><br/><p><bold>Email :</bold><a href='+this.inquiry.email+'>'+this.inquiry.email+'</a></p><br/><p><bold>Message :</bold></p><br/>'+this.inquiry.message
    };

    this.http.post('http://localhost:3000/sendMail', emailHtml)
      .subscribe(
        (res : any) => {
          if(res.status==200){
            alert(res.responseMessage);
          }else{
            alert(res.responseMessage);
          }
        },
        err => {
          alert("Error occured");
        }
      );
  }

  ngOnInit() {
    this.inquiry.package = 'default';
    this.packageDetails = PackageData.packageList;
    this.testimonials = TestimonialData.testimonialList;
    this.homeImageSlider();
    this.testimonialsSlider();
    this.loadPackages();
    this.loadTestimonials();
    this.loadInitialSelectedPackage(8);
  }

  // home slider
  homeImageSlider() {
    $(document).ready(function () {
      $('.home-slider').slick({
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

  //testimonials
  testimonialsSlider(){
    $(document).ready(function () {
      $('.testimonial').slick({
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,

        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
    });
  }

  private loadPackages(){
    // this.packageList = PackageData.packageList;

    this.packageList = PackageData.packageList.filter(function(item){
      return item.id === 1 || item.id === 3 || item.id === 4 || item.id === 4 || item.id === 6 || item.id === 8  ;
    });
  }

  private loadTestimonials(){
    this.testimonialList = TestimonialData.testimonialList;
  }

  private loadInitialSelectedPackage(id){
    for(var i = 0;i < this.packageList.length;i++){
      if(this.packageList[i].id== id){
        this.packageMoreDetails = this.packageList[i];
        this.locationCovered = this.packageMoreDetails.locationCovered;
      }
    }
  }

  private onClickTakeAPeak(id){
    console.log("Adoo")
    for(var i = 0;i < this.packageList.length;i++){
      if(this.packageList[i].id== id){
        this.packageMoreDetails = this.packageList[i];
        this.locationCovered = this.packageMoreDetails.locationCovered;
        const element = document.querySelector("#packages");
        element.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
      }
    }
  }

  onClickViewMore= function (id) {
    this.router.navigate(['/packages', id]);
  };
  onClickMorePackages= function () {
    this.router.navigate(['/package-list']);
  };
}
