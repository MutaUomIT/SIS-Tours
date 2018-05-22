import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { CountryList } from "../../configFiles/countryList";
import { NgForm } from '@angular/forms';
import { MailSendingService } from '../../services/mail-sending.service';
import { MsgPopupService } from '../../services/msg-popup.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-send-inquiry',
  templateUrl: './send-inquiry.component.html',
  styleUrls: []
})
export class SendInquiryComponent implements OnInit {

  @ViewChild('f') inquiryFormModal: NgForm

  @Input() modalConfig: any;

  countryList: any = [];

  dateForm: Date = new Date();
  date: Date = new Date();
  private _bsValue: Date;
  minDate = new Date();
  dateArrival: any;
  selectedCountry : any;

  constructor(private datePipe: DatePipe, private mailSender: MailSendingService, private msgPopup: MsgPopupService) { }

  ngOnInit() {
    this.countryList = CountryList.countryListWithPhoneCode;
    this.modalConfig = {
      title : "Customized Trip",
      isDurationWise : true,
      selectedPackage : null
    };
  }

  onSubmit() {

    if (this.inquiryFormModal.valid) {
      var dataPipe = new DatePipe("en-US");

      var inquiryInModal = {
        duration: null,
        selectedPackage: null,
        arrivalDate: dataPipe.transform(this.inquiryFormModal.value.arrivalDate, 'dd-MM-yyyy'),
        email: this.inquiryFormModal.value.email,
        name: this.inquiryFormModal.value.name,
        country: this.inquiryFormModal.value.country.name,
        mobile: this.inquiryFormModal.value.country.code + ' ' + parseInt(this.inquiryFormModal.value.mobile),
        message: this.inquiryFormModal.value.message,
        children: this.inquiryFormModal.value.children,
        adults: this.inquiryFormModal.value.adults
      }
      if (this.modalConfig.isDurationWise) {
        inquiryInModal.duration = this.inquiryFormModal.value.duration;
      } else {
        inquiryInModal.selectedPackage = this.modalConfig.selectedPackage
      }

      this.sendInquiryWithCustomizePackages(inquiryInModal);
    } else {
      this.msgPopup.broadcastMessagePopupEventEmitter({
        type: 'error',
        msg: "Please fill Valid Data"
      });
    }
  }

  setCountryCode(obj) {

    if (obj === null) {
      this.inquiryFormModal.form.patchValue({ code: '' });
      this.inquiryFormModal.form.patchValue({ mobile: '' });
    } else {
      this.inquiryFormModal.form.patchValue({ code: obj.code })
    }

  }

  private sendInquiryWithCustomizePackages(inquiryCustom) {

    var packageDetails = {
      title: null,
      selectedOption: null
    }

    var mailObject = {
      subject: '',
      mailBody: ''
    };

    if (inquiryCustom.duration != null) {
      packageDetails.title = "Tour Duration";
      packageDetails.selectedOption = inquiryCustom.duration;
    } else if (inquiryCustom.selectedPackage != null) {
      packageDetails.title = "Selected Package";
      packageDetails.selectedOption = inquiryCustom.selectedPackage;
    }

    mailObject.subject = "Inquiry Details";
    mailObject.mailBody =
      '<p><bold>' + packageDetails.title + ' :</bold>' + packageDetails.selectedOption +
      '</p><br/><p><bold>ArrivalDate :</bold>' + inquiryCustom.arrivalDate +
      '</p><br/><p><bold>Country :</bold>' + inquiryCustom.country +
      '</p><br/><p><bold>Name :</bold>' + inquiryCustom.name +
      '</p><br/><p><bold>Mobile :</bold>' + inquiryCustom.mobile +
      '</p><br/><p><bold>Email :</bold><a href=' + inquiryCustom.email + '>' + inquiryCustom.email +
      '</a></p><br/><p><bold>No of adults :</bold>' + inquiryCustom.adults +
      '</p></br><p><bold>No of children :</bold>' + inquiryCustom.children +
      '</p></br><p><bold>Message :</bold></p><br/>' + inquiryCustom.message;

    this.mailSender.sendMail(mailObject).then((res: any) => {
      if (res.status === 200) {
        this.resetForm();
      }
    });
  }

  resetForm() {
    this.inquiryFormModal.reset();
    this.inquiryFormModal.form.patchValue({ duration: '' })
  }
}
