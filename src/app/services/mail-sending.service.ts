import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MsgPopupService} from './msg-popup.service'
import { reject } from 'q';

@Injectable()
export class MailSendingService {
 
  constructor(private http: HttpClient ,private msgPopup : MsgPopupService) { }

  sendMail(htmlObj:any){


    return new Promise(resolve => {
      this.http.post('http://localhost:3000/sendMail', htmlObj).subscribe((res : any) => {
        if(res.status==200){
          this.msgPopup.broadcastMessagePopupEventEmitter({
            type : 'success',
            msg : res.responseMessage
          });
          resolve(res);
        }else{
          this.msgPopup.broadcastMessagePopupEventEmitter({
            type : 'error',
            msg : res.responseMessage
          });
          resolve(res);
        }
      
      }, err => {

        this.msgPopup.broadcastMessagePopupEventEmitter({
          type : 'error',
          msg : "An error occured"
        });
        reject(err);

      });
    });
  }

}
