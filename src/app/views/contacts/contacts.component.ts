import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  inquiry : any = {};

  constructor(private http: HttpClient) { }

  sendInquiry(){

    var emailHtml = {
      mailBody : '<p><bold>Name :</bold>'+this.inquiry.name+'</p><br/><p><bold>Email :</bold><a href='+this.inquiry.email+'>'+this.inquiry.email+'</a></p><br/><p><bold>Message :</bold></p><br/>'+this.inquiry.description
    };

   this.http.post('http://localhost:3000/sendMail', emailHtml)
     .subscribe(
       (res : any) => {
         if(res.status==200){
           alert(res.responseMessage);
         }else{
           alert(res.responseMessage);
         }
       },
       err => {
         alert("Error occured");
       }
     );
 }

  ngOnInit() {
    this.initJqueryFunctions();
  }

  initJqueryFunctions(){}

}
