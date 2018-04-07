import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {PackageData} from "../../../configFiles/packegeDetails";
import { DatePipe } from '@angular/common';
import {CountryList} from "../../../configFiles/countryList";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {

  @ViewChild('f') inquiryForm : NgForm

  packageList: any=[];
  arrivalDate: Date = new Date();
  minDate = new Date();
  dateArrival : any;

  countryList : any = [];
  selectedCountry : any;

  modalConfig : any = {
    title : "Customized Trip",
    isDurationWise : true,
    selectedPackage : null
  }

  constructor(private datePipe: DatePipe,private router:Router) { }

  ngOnInit() {
    this.countryList = CountryList.countryListWithPhoneCode;
    this.getPackageList();
    window.scroll(0,0);
  }

  setCountryCode(type,obj){
    if(type === 'lessDescribed'){
      if(obj===null){
        this.inquiryForm.form.patchValue({code:''});
        this.inquiryForm.form.patchValue({mobile:''});
      }else{
        this.inquiryForm.form.patchValue({code: obj.code})
      }
    }
  }

  private getPackageList(){
    this.packageList = PackageData.packageList;
  }

  onClickViewMore= function (id) {
    this.router.navigate(['/packages', id]);
  };
}
