import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WinnerlistService {

  constructor() { }
   topWinners=[
    {
      imageAddress:"assets/Images & license/Main Logo/icon.png",
      firstName:"shivam",
      lastName:"Dogra",
      credit:1
    },
    {
      imageAddress:"assets/Images & license/Main Logo/icon.png",
      firstName:"rakesh",
      lastName:"Dogra",
      credit:2
    },
    {
      imageAddress:"assets/Images & license/Main Logo/icon.png",
      firstName:"shivam",
      lastName:"Dogra",
      credit:3
    },
    {
      imageAddress:"assets/Images & license/Main Logo/icon.png",
      firstName:"rakesh",
      lastName:"Dogra",
      credit:4
    },
    {
      imageAddress:"assets/Images & license/Main Logo/icon.png",
      firstName:"shivam",
      lastName:"Dogra",
      credit:5
    },
    {
      imageAddress:"assets/Images & license/Main Logo/icon.png",
      firstName:"rakesh",
      lastName:"Dogra",
      credit:6
    }
  ]
  getWinners():any{
    return this.topWinners;
  }
}
