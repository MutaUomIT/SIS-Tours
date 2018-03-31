import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MsgPopupService} from './msg-popup.service'

@Injectable()
export class MailSendingService {
 
  constructor(private http: HttpClient ,private msgPopup : MsgPopupService) { }

  sendMail(htmlObj:any){
    this.http.post('http://localhost:3000/sendMail', htmlObj)
    .subscribe(
      (res : any) => {
        if(res.status==200){
          this.msgPopup.broadcastMessagePopupEventEmitter({
            type : 'success',
            msg : res.responseMessage
          });
        
        }else{
          this.msgPopup.broadcastMessagePopupEventEmitter({
            type : 'error',
            msg : res.responseMessage
          });
        }
      },
      err => {
        this.msgPopup.broadcastMessagePopupEventEmitter({
          type : 'error',
          msg : "An error occured"
        });
      
      }
    );
  }

}
