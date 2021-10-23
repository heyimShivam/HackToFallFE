import { Component, OnInit } from '@angular/core';
import { WinnerlistService } from './winnerlist.service';

@Component({
  selector: 'app-prize',
  templateUrl: './prize.component.html',
  styleUrls: ['./prize.component.css'],
  providers: [
    WinnerlistService
  ]
})
export class PrizeComponent implements OnInit {

  constructor(
    private winnerlistService:WinnerlistService,
  ) { 
    this.fetchdetails()
  }
  topWinners:any=[]
  topWinnersCheck:any=[];
  check:any=[];

  ngOnInit(): void {
      this.fetchdetails()
  }
  
  fetchdetails(){
   setTimeout(()=>
   {
   this.winnerlistService.update().toPromise().then(
     (data:any)=>{
       console.log(data);
       this.topWinnersCheck=data;
       let short=this.topWinnersCheck.length;
      setTimeout(() => {
       for (let i = 0; i < short; i++) {   
       for (let j = i+1; j < short; j++) {   
          if(this.topWinnersCheck[i].credit < this.topWinnersCheck[j].credit) {  
              let temp = this.topWinnersCheck[i];  
              this.topWinnersCheck[i] = this.topWinnersCheck[j];  
              this.topWinnersCheck[j] = temp;  
          }   
       }   
   }
   this.topWinners=this.topWinnersCheck
   },2500);
     }
   );
   },3500);
  }
}

