import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WinnerlistService implements OnInit{
  
  constructor(
    private http:HttpClient
  ) {
    this.fetch();
   }
  fetch(){
    this.http.get('http://localhost:4000/all-user-data-get', {responseType: 'json'}).toPromise().then(
      data =>{
      this.userMessage=data;
      },
      error=>{
        console.log(error)
      }
    )
  }
  userMessage:any;
  ngOnInit(){
    this.fetch();
  }

  value=[200,300,400];
  
  getWinners():any{
      this.ngOnInit();

      setTimeout(() => {
        let short=this.userMessage.length;
      for (let i = 0; i < short; i++) {   
        for (let j = i+1; j < short; j++) {   
           if(this.userMessage[i].credit < this.userMessage[j].credit) {  
               let temp = this.userMessage[i];  
               this.userMessage[i] = this.userMessage[j];  
               this.userMessage[j] = temp;  
           }   
        }   
    } 
  },2500);
  }
  update():any{

      return this.http.get('http://localhost:4000/all-user-data-get', {responseType: 'json'});

  }
}
