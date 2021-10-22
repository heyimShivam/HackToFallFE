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
    private winnerlistService:WinnerlistService 
  ) { }
  
  topWinners:any=[];

  ngOnInit(): void {
    this.topWinners=this.winnerlistService.getWinners();
  }

}
