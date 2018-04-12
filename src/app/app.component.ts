import { Component, ViewChild, ElementRef } from '@angular/core';
import { MsgPopupService } from './services/msg-popup.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('pleaseWaitModal') pleaseWaitModal: ElementRef;

  title = 'app';
  msgObj: any = {};

  constructor(public msgPopup: MsgPopupService,private spinnerService: Ng4LoadingSpinnerService) {

    this.initJqueryFunctions();

    this.msgPopup.messagePopupEventEmitter.subscribe((response: any) => {

      switch (response.type) {

        case 'error':
          this.displayMsg(false, response.msg);
          break;

        case 'success':
          this.displayMsg(true, response.msg);
          break;

        case 'show_modal':
          this.showPleaseWaitModal();
          break;

        case 'hide_modal':
          this.hidePleaseWaitModal();
          break;
      }
    });
  }

  ngOnInit() {
    this.resetMsgObject();
    this.collapseFunction();
    }

  initJqueryFunctions() { }

  resetMsgObject() {
    this.msgObj.msgSuccess = false;
    this.msgObj.msgError = false;
    this.msgObj.msg = '';
  }

  private displayMsg(success: boolean, msg: string) {

    if (success) {
      this.msgObj.msgSuccess = true;
      this.msgObj.msg = msg;
      setTimeout(() => {
        this.resetMsgObject();
      }, 3000)
    } else {
      this.msgObj.msgError = true;
      this.msgObj.msg = msg;
      setTimeout(() => {
        this.resetMsgObject();
      }, 3000)
    }

  }

  showPleaseWaitModal() {
    // $(this.pleaseWaitModal.nativeElement).modal('show');
    this.spinnerService.show();
  }

  hidePleaseWaitModal() {
    // $(this.pleaseWaitModal.nativeElement).modal('hide');
    this.spinnerService.hide();
  }

  // loadingOverlayElement(){
  //
  //   this.spinnerService.show();
  //   setTimeout(() => {
  //    /** spinner ends after 5 seconds */
  //     this.spinnerService.hide();
  //   }, 5000);
  // }

  collapseFunction(){
    $(document).ready(function () {
      $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
      });
    })
  }

}


