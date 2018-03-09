import { Component, OnInit } from '@angular/core';
import { PackageData } from './../../configFiles/packegeDetails';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  packageDetails;
  constructor() {
  }

  ngOnInit() {
    this.packageDetails = PackageData.packageList;
    console.log(this.packageDetails[0].imagePath+'/'+this.packageDetails[0].backgroundImage);

  }


}
