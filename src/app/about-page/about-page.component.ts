import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Admin=[{
    firstName:"Shivam",
    imageAddress:"assets/Images & license/Main Logo/icon.png"
  },
  {
    firstName:"Manan",
    imageAddress:"assets/Images & license/Main Logo/icon.png"
  },
  {
    firstName:"Shubham",
    imageAddress:"assets/Images & license/Main Logo/icon.png"
  },
  {
    firstName:"Shivam Sai",
    imageAddress:"assets/Images & license/Main Logo/icon.png"
  }]

}
