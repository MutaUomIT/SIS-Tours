import { Component  } from '@angular/core';
import {MsgPopupService} from './services/msg-popup.service'
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  msgObj : any = {};

 constructor(public msgPopup: MsgPopupService) {

    this.initJqueryFunctions();

    this.msgPopup.messagePopupEventEmitter.subscribe((response:any)=>{
      
      if(response.type === 'error'){
        this.displayMsg(false,response.msg);
      }else if(response.type === 'success'){
        this.displayMsg(true,response.msg);
      }
    })
  }

  ngOnInit() {
    this.resetMsgObject();
  }

  initJqueryFunctions(){}

  resetMsgObject(){
    
        this.msgObj.msgSuccess = false;
        this.msgObj.msgError = false;
        this.msgObj.msg = '';
    
     }

  private displayMsg(success:boolean,msg:string){
    
        if(success){
          this.msgObj.msgSuccess = true;
          this.msgObj.msg = msg;
          setTimeout(()=>{
            this.resetMsgObject();
          },3000)
        }else{
          this.msgObj.msgError = true;
          this.msgObj.msg = msg;
          setTimeout(()=>{
            this.resetMsgObject();
          },3000)
        }
    
      }
}


$(document).ready(function () {
  $('.navbar-nav .openBtn').click(function () {
    $('.overlay').css("display", "block");
  })

  $('.overlay .closebtn').click(function () {
    $('.overlay').css("display", "none");
  })

});

