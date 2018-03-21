import { Component, OnInit } from '@angular/core';
import {PackageData} from "../../configFiles/packegeDetails";
import {TestimonialData} from "../../configFiles/testimonials";
import { HttpClient } from '@angular/common/http'
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
  inquiry : any = {};

  constructor(private http: HttpClient) {}

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
    this.packageDetails = PackageData.packageList;
    this.testimonials = TestimonialData.testimonialList;
    this.homeImageSlider();
    this.testimonialsSlider();
    //this.initJqueryFunctions();
    this.loadPackages();
    this.loadTestimonials();
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
  //
  // }

  private loadPackages(){
    this.packageList = PackageData.packageList;
  }

  private loadTestimonials(){
    this.testimonialList = TestimonialData.testimonialList;
    console.log(this.testimonialList);
  }

}
