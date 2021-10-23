import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class MessageServiceService {
  userMessage:any;
  constructor(
    private http:HttpClient
  ) {
    this.fetchDataOnline()
  }
  fetchDataOnline(){
    this.http.get('http://localhost:4000/all-user-data-get', {responseType: 'json'}).toPromise().then(
      data =>{
      console.log(data);
      this.userMessage=data;
      },
      error=>{
        console.log(error)
      }
    )
  }

  getMessageData(){
 
    return this.userMessage;
  }
  sendData = {
    name:"shivam Dogra",
    img:"https://cdn.pixabay.com/photo/2017/02/15/20/33/floral-2069810_960_720.png",
    time:1,
    credit:5,
    noOfDeleteLeft:4,
    deleting:true
  }
  updatePlantingRequest(userplace:string){
    // this.userMessage[userplace].deleting=false;
    // this.userMessage[userplace].credit=this.userMessage[userplace].credit+0.25;
    // this.userMessage[userplace].noOfDeleteLeft=this.userMessage[userplace].noOfDeleteLeft-1;
  }
}
