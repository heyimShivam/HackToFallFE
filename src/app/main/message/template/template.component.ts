import { Component, Input, OnInit } from '@angular/core';
import { UserDetailService } from 'src/app/service/user-detail.service';
import { MessageServiceService } from '../message-service.service';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
  providers:[
    UserDetailService,
    MessageServiceService
  ]
})
export class TemplateComponent implements OnInit {
  @Input() userMessage={
    name:'',
    image:'',
    time:0,
    planting:false,
    id:''
  }
  me:any;
  constructor(
    private userDetailService:UserDetailService,
    private messageServiceService:MessageServiceService
  ) { }
   
  ngOnInit(): void {
    this.mydetails();
  }
  mydetails(){
    this.me=this.userDetailService.getMeDetails();
  }
  checkPointAvailable(userplace:string){
    this.mydetails();
    if(this.me.plantTree>=1){
      console.log("e")
      this.userDetailService.reduceplantTreeTOOne();
      this.messageServiceService.updatePlantingRequest(userplace);
      this.mydetails();
      this.userMessage.planting=false;
    }

  }
}
