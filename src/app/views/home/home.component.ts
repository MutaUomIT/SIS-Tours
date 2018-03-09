import { Component, OnInit } from '@angular/core';
// import {ShopData} from "../../configFiles/shopDetails";
import {PackageData} from "../../configFiles/packegeDetails";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  packageImage : String = '';

  constructor() {
    this.packageImage = PackageData.packageList[0].imagePath +'/'+ PackageData.packageList[0].backgroundImage;
  }

  ngOnInit() {
  }
}
