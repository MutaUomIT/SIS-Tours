import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { MsgPopupService } from '../../services/msg-popup.service';
import { MailSendingService } from '../../services/mail-sending.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: []
})
export class ContactsComponent implements OnInit {

  @ViewChild('f') contactUsForm: NgForm

  constructor(private msgPopup: MsgPopupService , private mailSender: MailSendingService) { }

  onSubmit() {

    if (this.contactUsForm.valid) {

      var contactUsInquiry = {
        name: this.contactUsForm.value.name,
        telephone: this.contactUsForm.value.mobile,
        email: this.contactUsForm.value.email,
        moreDetails: this.contactUsForm.value.moreDetails
      }

      var mailObject = {
        subject: 'Contact Us customer inquiry.',
        mailBody:
          '<p><bold>Name :</bold>' + contactUsInquiry.name +
          '<br/><p><bold>Telephone :</bold>' + contactUsInquiry.telephone +
          '<br/></p><br/><p><bold>Email :</bold><a href=' + contactUsInquiry.email + '>' + contactUsInquiry.email +
          '<br/></a></p><br/><p><bold>Message :</bold></p><br/>' + contactUsInquiry.moreDetails
      };
      this.mailSender.sendMail(mailObject).then((res: any) => {
        if (res.status === 200) {
          this.resetForm();
        }
      });

    } else {
      this.msgPopup.broadcastMessagePopupEventEmitter({
        type: 'error',
        msg: "Please fill Valid Data"
      });
    }

  }

  resetForm() {
    this.contactUsForm.reset();
  }

  ngOnInit() {
    this.initJqueryFunctions();
    window.scroll(0, 0);
  }

  initJqueryFunctions() { }

}
