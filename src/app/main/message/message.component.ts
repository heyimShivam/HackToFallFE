import { Component,  OnInit, Output,EventEmitter } from '@angular/core';
import { UserDetailService } from 'src/app/service/user-detail.service';
import { MessageServiceService } from './message-service.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  providers:[
    MessageServiceService,
    UserDetailService
  ]
})
export class MessageComponent implements OnInit {
  userMessage:any=[];
  mydetails:any=[];
  @Output() newItemEvent = new EventEmitter();
  constructor(
    private messageServiceService:MessageServiceService,
    private userDetailService:UserDetailService
  ) { }

  ngOnInit(): void {
   setTimeout(()=>{
    this.fetchdetails()
   },2500);
  }
  fetchdetails(){
    this.userMessage=this.messageServiceService.getMessageData();
    this.mydetails=this.userDetailService.me;
  }
  close(){
    this.newItemEvent.emit("none");
  }
}
