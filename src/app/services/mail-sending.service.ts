import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MsgPopupService } from './msg-popup.service';
import { reject } from 'q';

import { AppConfig } from '../configFiles/app.config';


@Injectable()
export class MailSendingService {

  serverConfig: any = {};

  constructor(private http: HttpClient, private msgPopup: MsgPopupService) {
    this.serverConfig = AppConfig.mailServerConfiguration;
  }

  sendMail(htmlObj: any) {

    return new Promise(resolve => {
      var url = 'http://' + this.serverConfig.IP_ADDRESS + ':' + this.serverConfig.PORT + '/sendMail';

      this.msgPopup.broadcastMessagePopupEventEmitter({ type: 'show_modal' });

      this.http.post(url, htmlObj).subscribe((res: any) => {
        if (res.status == 200) {
          this.msgPopup.broadcastMessagePopupEventEmitter({
            type: 'success',
            msg: res.responseMessage
          });
          this.msgPopup.broadcastMessagePopupEventEmitter({ type: 'hide_modal' });
          resolve(res);
        } else {
          this.msgPopup.broadcastMessagePopupEventEmitter({
            type: 'error',
            msg: res.responseMessage
          });
          this.msgPopup.broadcastMessagePopupEventEmitter({ type: 'hide_modal' });
          resolve(res);
        }

      }, err => {

        this.msgPopup.broadcastMessagePopupEventEmitter({
          type: 'error',
          msg: "An error occured"
        });
        this.msgPopup.broadcastMessagePopupEventEmitter({ type: 'hide_modal' });
        reject(err);

      });
    });
  }

}
