import { Component, OnInit, ViewChild } from '@angular/core';
import { PackageData } from "../../configFiles/packegeDetails";
import { TestimonialData } from "../../configFiles/testimonials";
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';
import { CountryList } from "../../configFiles/countryList";
import { NgForm } from '@angular/forms';
import { MailSendingService } from '../../services/mail-sending.service';
import { MsgPopupService } from '../../services/msg-popup.service';
import { DatePipe } from '@angular/common';
import { WOW } from 'wowjs/dist/wow.min';

declare var jquery: any;
declare var $: any;
declare var wow: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('f') inquiryForm: NgForm
  @ViewChild('f2') inquiryFormCustom: NgForm
  @ViewChild('f3') inquiryFormModal: NgForm

  packageList: any = [];
  allPackageList: any = [];
  packageDetails;
  testimonialList: any = [];
  testimonials;
  packageMoreDetails: any = [];
  locationCovered: any = [];
  countryList: any = [];
  selectedCountry: any;
  selectedCountry2: any;
  defaultPackage = "default";

  dateForm: Date = new Date();
  date1: Date = new Date();
  date2: Date = new Date();
  private _bsValue: Date;
  minDate = new Date();
  dateArrival: any;
  dateArrival1: any;
  dateArrival2: any;
  modalConfig : any = {
    title : "Customized Trip",
    isDurationWise : true,
    selectedPackage : null
  }


  constructor(private datePipe: DatePipe, private http: HttpClient, private router: Router, private mailSender: MailSendingService, private msgPopup: MsgPopupService) {

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

  ngOnInit() {
    this.countryList = CountryList.countryListWithPhoneCode;
    this.packageDetails = PackageData.packageList;
    this.testimonials = TestimonialData.testimonialList;
    this.initJqueryFuctions();
    this.loadPackages();
    this.loadTestimonials();
    this.loadInitialSelectedPackage(8);
  }

  get bsValue(): Date {
    return this._bsValue;
  }

  setCountryCode(type, obj) {

    if (type === 'our') {

      if (obj === null) {
        this.inquiryForm.form.patchValue({ code: '' });
        this.inquiryForm.form.patchValue({ mobile: '' });
      } else {
        this.inquiryForm.form.patchValue({ code: obj.code })
      }

    } else if (type === 'custom') {

      if (obj === null) {
        this.inquiryFormCustom.form.patchValue({ code2: '' });
        this.inquiryFormCustom.form.patchValue({ mobile2: '' });
      } else {
        this.inquiryFormCustom.form.patchValue({ code2: obj.code })
      }
    }
  }

  resetForm(type) {
    if (type === 'custom') {
      this.inquiryFormCustom.reset();
      this.inquiryFormCustom.form.patchValue({ duration: '' })
    } else if (type === 'our') {
      this.inquiryForm.reset();
      this.inquiryForm.form.patchValue({ package: 'default' })
    }
  }

  private sendInquiryWithExistingPackages() {
    var mailObject = {
      subject: '',
      mailBody: ''
    };

    var inquiry = {
      package: this.inquiryForm.value.package,
      arrivalDate: this.inquiryForm.value.arrivalDate,
      email: this.inquiryForm.value.email,
      name: this.inquiryForm.value.name,
      country: this.inquiryForm.value.country.name,
      mobile: this.inquiryForm.value.country.code + ' ' + parseInt(this.inquiryForm.value.mobile),
      children: this.inquiryForm.value.children,
      adults: this.inquiryForm.value.adults,
      message: this.inquiryForm.value.message
    }

    mailObject.subject = "Inquiry from selected package";
    mailObject.mailBody = '<p><bold>Package :</bold>' + inquiry.package + '</p><br/><p><bold>ArrivalDate :</bold>' + inquiry.arrivalDate +
      '</p><br/><p><bold>Country :</bold>' + inquiry.country + '</p><br/><p><bold>Name :</bold>' + inquiry.name + '</p><br/><p><bold>Mobile :</bold>' + inquiry.mobile +
      '</p><br/><p><bold>Email :</bold><a href=' + inquiry.email + '>' + inquiry.email + '</a></p><br/><p><bold>No of adults :</bold>' + inquiry.adults +
      '</p></br><p><bold>No of children :</bold>' + inquiry.children + '</p></br><p><bold>Message :</bold></p><br/>' + inquiry.message;

    this.mailSender.sendMail(mailObject).then((res: any) => {
      if (res.status === 200) {
        this.resetForm('our');
      }
    });

  }

  private sendInquiryWithCustomizePackages(inquiryCustom) {
    var mailObject = {
      subject: '',
      mailBody: ''
    };

    mailObject.subject = "Inquiry from Customize package";
    mailObject.mailBody =
      '<p><bold>Tour Duration :</bold>' + inquiryCustom.duration +
      '</p><br/><p><bold>ArrivalDate :</bold>' + inquiryCustom.arrivalDate +
      '</p><br/><p><bold>Country :</bold>' + inquiryCustom.country +
      '</p><br/><p><bold>Name :</bold>' + inquiryCustom.name +
      '</p><br/><p><bold>Mobile :</bold>' + inquiryCustom.mobile +
      '</p><br/><p><bold>Email :</bold><a href=' + inquiryCustom.email + '>' + inquiryCustom.email +
      '</a></p><br/><p><bold>No of adults :</bold>' + inquiryCustom.adults +
      '</p></br><p><bold>No of children :</bold>' + inquiryCustom.children +
      '</p></br><p><bold>Message :</bold></p><br/>' + inquiryCustom.message;

    this.mailSender.sendMail(mailObject).then((res: any) => {
      if (res.status === 200) {
        this.resetForm('custom');
      }
    });
  }

  onSubmit(formName) {

    if (formName === 'our') {
      if (this.inquiryForm.valid) {
        this.sendInquiryWithExistingPackages();
      } else {
        this.msgPopup.broadcastMessagePopupEventEmitter({
          type: 'error',
          msg: "Please fill Valid Data"
        });
      }

    } else if (formName === 'custom') {

      if (this.inquiryFormCustom.valid) {

        var inquiryCustom = {
          duration: this.inquiryFormCustom.value.duration,
          arrivalDate: this.inquiryFormCustom.value.arrivalDate2,
          email: this.inquiryFormCustom.value.email2,
          name: this.inquiryFormCustom.value.name2,
          country: this.inquiryFormCustom.value.country2.name,
          mobile: this.inquiryFormCustom.value.country2.code + ' ' + parseInt(this.inquiryFormCustom.value.mobile2),
          message: this.inquiryFormCustom.value.message2,
          children: this.inquiryFormCustom.value.children,
          adults: this.inquiryFormCustom.value.adults
        }

        this.sendInquiryWithCustomizePackages(inquiryCustom);
      } else {
        this.msgPopup.broadcastMessagePopupEventEmitter({
          type: 'error',
          msg: "Please fill Valid Data"
        });
      }
    } else if (formName === 'modal') {
      if (this.inquiryFormModal.valid) {

        var inquiryInModal = {
          duration: this.inquiryFormModal.value.duration,
          arrivalDate: this.inquiryFormModal.value.arrivalDate2,
          email: this.inquiryFormModal.value.email2,
          name: this.inquiryFormModal.value.name2,
          country: this.inquiryFormModal.value.country2.name,
          mobile: this.inquiryFormModal.value.country2.code + ' ' + parseInt(this.inquiryFormModal.value.mobile2),
          message: this.inquiryFormModal.value.message2
        }

        this.sendInquiryWithCustomizePackages(inquiryInModal);
      } else {
        this.msgPopup.broadcastMessagePopupEventEmitter({
          type: 'error',
          msg: "Please fill Valid Data"
        });
      }
    }

  }

  private loadPackages() {
    this.allPackageList = PackageData.packageList;

    this.packageList = PackageData.packageList.filter(function (item) {
      return item.id === 1 || item.id === 3 || item.id === 4 || item.id === 4 || item.id === 6 || item.id === 8;
    });
  }

  private loadTestimonials() {
    this.testimonialList = TestimonialData.testimonialList;
  }

  private loadInitialSelectedPackage(id) {
    for (var i = 0; i < this.packageList.length; i++) {
      if (this.packageList[i].id == id) {
        this.packageMoreDetails = this.packageList[i];
        this.locationCovered = this.packageMoreDetails.locationCovered;
      }
    }
  }

  private onClickTakeAPeak(id) {
    for (var i = 0; i < this.packageList.length; i++) {
      if (this.packageList[i].id == id) {
        this.packageMoreDetails = this.packageList[i];
        this.locationCovered = this.packageMoreDetails.locationCovered;
        const element = document.querySelector("#packages");
        element.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
      }
    }
  }

  onClickViewMore = function (id) {
    this.router.navigate(['/packages', id]);
  };

  onClickMorePackages = function () {
    this.router.navigate(['/package-list']);
  };

  initJqueryFuctions() {

    //testominols slider
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

    $(document).ready(function(){
      new WOW().init();
     });


  }
}
