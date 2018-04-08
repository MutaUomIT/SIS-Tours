import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-leisure',
  templateUrl: './leisure.component.html',
  styleUrls: ['./leisure.component.css']
})
export class LeisureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initJqueryFunctions();
    window.scroll(0,0);
    this.imageZoomEffect();
    this.stringLimitationSetter();
  }

  initJqueryFunctions(){}

  //image zoom effect
  imageZoomEffect()
  {
    $(document).ready(function () {
      $('.lanka-block').mouseenter(function () {
        $('.lanka-image-container').css("overflow", "hidden");
      });

      $('.lanka-block').mouseleave(function () {
        $('.lanka-image-container').css("overflow", "hidden");
      });
    });
  }

  //string limitation setter
  stringLimitationSetter()
  {
    $(document).ready(function () {

      var x = $('.lanka-block:nth-child(1) .lanka-description .half-text').text().substring(0, 500);


      var y = $('.lanka-block:nth-child(1) .lanka-description .half-text').text().length;

      if (y > 500) {
        $('.lanka-block:nth-child(1) .lanka-description .half-text').html(x + '...');
        $('.lanka-block:nth-child(1) .green-button:nth-child(1)').css("display", "inline-block")
      }

      //

      var x = $('.lanka-block:nth-child(2) .lanka-description .half-text').text().substring(0, 500);


      var y = $('.lanka-block:nth-child(2) .lanka-description .half-text').text().length;

      if (y > 500) {
        $('.lanka-block:nth-child(2) .lanka-description .half-text').html(x + '...');
        $('.lanka-block:nth-child(2) .green-button:nth-child(1)').css("display", "inline-block")
      }

      //

      var x = $('.lanka-block:nth-child(3) .lanka-description .half-text').text().substring(0, 500);


      var y = $('.lanka-block:nth-child(3) .lanka-description .half-text').text().length;

      if (y > 500) {
        $('.lanka-block:nth-child(3) .lanka-description .half-text').html(x + '...');
        $('.lanka-block:nth-child(3) .green-button:nth-child(1)').css("display", "inline-block")
      }

      //

      var x = $('.lanka-block:nth-child(4) .lanka-description .half-text').text().substring(0, 500);


      var y = $('.lanka-block:nth-child(4) .lanka-description .half-text').text().length;

      if (y > 500) {
        $('.lanka-block:nth-child(4) .lanka-description .half-text').html(x + '...');
        $('.lanka-block:nth-child(4) .green-button:nth-child(1)').css("display", "inline-block")
      }

      //

      var x = $('.lanka-block:nth-child(5) .lanka-description .half-text').text().substring(0, 500);


      var y = $('.lanka-block:nth-child(5) .lanka-description .half-text').text().length;

      if (y > 500) {
        $('.lanka-block:nth-child(5) .lanka-description .half-text').html(x + '...');
        $('.lanka-block:nth-child(5) .green-button:nth-child(1)').css("display", "inline-block")
      }

      //

      var x = $('.lanka-block:nth-child(6) .lanka-description .half-text').text().substring(0, 500);


      var y = $('.lanka-block:nth-child(6) .lanka-description .half-text').text().length;

      if (y > 500) {
        $('.lanka-block:nth-child(6) .lanka-description .half-text').html(x + '...');
        $('.lanka-block:nth-child(6) .green-button:nth-child(1)').css("display", "inline-block")
      }

      //

      var x = $('.lanka-block:nth-child(7) .lanka-description .half-text').text().substring(0, 500);

      var y = $('.lanka-block:nth-child(7) .lanka-description .half-text').text().length;

      if (y > 500) {
        $('.lanka-block:nth-child(7) .lanka-description .half-text').html(x + '...');
        $('.lanka-block:nth-child(7) .green-button:nth-child(1)').css("display", "inline-block")
      }

      //

      var x = $('.lanka-block:nth-child(8) .lanka-description .half-text').text().substring(0, 500);

      var y = $('.lanka-block:nth-child(8) .lanka-description .half-text').text().length;

      if (y > 500) {
        $('.lanka-block:nth-child(8) .lanka-description .half-text').html(x + '...');
        $('.lanka-block:nth-child(8) .green-button:nth-child(1)').css("display", "inline-block")
      }

      //

      var x = $('.lanka-block:nth-child(9) .lanka-description .half-text').text().substring(0, 500);


      var y = $('.lanka-block:nth-child(9) .lanka-description .half-text').text().length;

      if (y > 500) {
        $('.lanka-block:nth-child(9) .lanka-description .half-text').html(x + '...');
        $('.lanka-block:nth-child(9) .green-button:nth-child(1)').css("display", "inline-block")
      }

      //

      var x = $('.lanka-block:nth-child(10) .lanka-description .half-text').text().substring(0, 500);

      var y = $('.lanka-block:nth-child(10) .lanka-description .half-text').text().length;

      if (y > 500) {
        $('.lanka-block:nth-child(10) .lanka-description .half-text').html(x + '...');
        $('.lanka-block:nth-child(10) .green-button:nth-child(1)').css("display", "inline-block")
      }

      //

      var x = $('.lanka-block:nth-child(11) .lanka-description .half-text').text().substring(0, 500);


      var y = $('.lanka-block:nth-child(11) .lanka-description .half-text').text().length;

      if (y > 500) {
        $('.lanka-block:nth-child(11) .lanka-description .half-text').html(x + '...');
        $('.lanka-block:nth-child(11) .green-button:nth-child(1)').css("display", "inline-block")
      }

      //

      var x = $('.lanka-block:nth-child(12) .lanka-description .half-text').text().substring(0, 500);


      var y = $('.lanka-block:nth-child(12) .lanka-description .half-text').text().length;

      if (y > 500) {
        $('.lanka-block:nth-child(12) .lanka-description .half-text').html(x + '...');
        $('.lanka-block:nth-child(12) .green-button:nth-child(1)').css("display", "inline-block")
      }


      $('.lanka-block .green-button:nth-child(1)').click(function () {
        $(this).hide();
        $(this).next().css("display", "inline-block")
        $(this).parent().siblings('.half-text').hide();
        $(this).parent().siblings('.full-text').show();
      });

      $('.lanka-block .green-button:nth-child(2)').click(function () {
        $(this).hide();
        $(this).prev().css("display", "inline-block")
        $(this).parent().siblings('.full-text').hide();
        $(this).parent().siblings('.half-text').show();
      });

    });
  }

}
