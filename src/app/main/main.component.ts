import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  bool=false;
  constructor() { }

  ngOnInit(): void {
  }
  openMessage(){
    this.bool=true;
  }
  boolupdate(){
    this.bool=false;
  }
}
