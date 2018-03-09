import { Component, OnInit } from '@angular/core';
import { PackageData } from './../../configFiles/packegeDetails';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  packageImage : String = '';

  package1: any = [];
  package2: any = [];

  constructor() {
  }

  ngOnInit() {
    this.loadPackages();
  }

  private loadPackages(){
    this.package1 = PackageData.packageList[1].imagePath +'/'+ PackageData.packageList[1].backgroundImage;
    this.package2 = PackageData.packageList[1].imagePath +'/'+ PackageData.packageList[1].backgroundImage;
  }

}
