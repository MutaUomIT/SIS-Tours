import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PackageData} from "../../../configFiles/packegeDetails";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {

  packageList: any=[];

  arrivalDate: Date = new Date();
  minDate = new Date();
  dateArrival : any;

  constructor(private datePipe: DatePipe,private router:Router) { }

  ngOnInit() {
    this.getPackageList();
    window.scroll(0,0);
  }
  private getPackageList(){
    this.packageList = PackageData.packageList;
  }

  onClickViewMore= function (id) {
    this.router.navigate(['/packages', id]);
  };
}
