import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class FaqsService {

  constructor() { }
  faqs=[
    {
      question:'WHAT IS ROBOWEEK 1?',
      answer:'1 Roboweek is a week long event conducted by Robotics Society of NIT Hamirpur. The aim of ROBOWEEK is to spread awareness about robotics nation wide by providing a platform to Robotics Enthusiasts to learn and get their skills tested.',
      display:false
    },
    {
      question:'WHAT IS ROBOWEEK 2?',
      answer:'2 Roboweek is a week long event conducted by Robotics Society of NIT Hamirpur. The aim of ROBOWEEK is to spread awareness about robotics nation wide by providing a platform to Robotics Enthusiasts to learn and get their skills tested.',
      display:false
    }
  ]
  getFaqs():any {
    return this.faqs;
  }
}
