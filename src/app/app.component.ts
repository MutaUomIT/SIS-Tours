import { Component, ViewChild, ElementRef } from '@angular/core';
import { MsgPopupService } from './services/msg-popup.service';
import { MailSendingService } from './services/mail-sending.service';
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

  constructor(public msgPopup: MsgPopupService,public mailSendingService : MailSendingService) {

    this.initJqueryFunctions();

    this.msgPopup.messagePopupEventEmitter.subscribe((response: any) => {

      if (response.type === 'error') {
        this.displayMsg(false, response.msg);
      } else if (response.type === 'success') {
        this.displayMsg(true, response.msg);
      }
    });

    this.mailSendingService.pleaseWaitModalEvent.subscribe((res:any)=>{
      if(res === 'show_modal'){
        this.showPleaseWaitModal();
      }else if(res === 'hide_modal'){
        this.hidePleaseWaitModal();
      }
    })

  }

  ngOnInit() {
    this.resetMsgObject();
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

  showPleaseWaitModal(){
    $(this.pleaseWaitModal.nativeElement).modal('show');
  }

  hidePleaseWaitModal(){
    $(this.pleaseWaitModal.nativeElement).modal('hide');
  }
}


