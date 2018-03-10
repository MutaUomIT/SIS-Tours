import { Component, OnInit } from '@angular/core';
import { PackageData } from './../../configFiles/packegeDetails';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  packageList: any=[];

  constructor() {
  }

  ngOnInit() {
    this.loadPackages();
  }

  private loadPackages(){
    this.packageList = PackageData.packageList;
  }

}
