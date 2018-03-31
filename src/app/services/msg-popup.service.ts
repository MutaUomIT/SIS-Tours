import { Injectable , Output , EventEmitter } from '@angular/core';

@Injectable()
export class MsgPopupService {
  @Output() messagePopupEventEmitter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  broadcastMessagePopupEventEmitter(response : any){
    this.messagePopupEventEmitter.emit(response);
  }

}
