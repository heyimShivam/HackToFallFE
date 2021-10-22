import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']
})
export class WinnerComponent implements OnInit {
  @Input() user ={
    imageAddress: "",
    name:"",
    rank:0
  };
  constructor() { }

  ngOnInit(): void {
  }

}
