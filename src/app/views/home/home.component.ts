import { Component, OnInit } from '@angular/core';
import {PackageData} from "../../configFiles/packegeDetails";
declare var jquery:any;
declare var $ :any;

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
    this.initJqueryFunctions();
  }

  initJqueryFunctions(){}
}
