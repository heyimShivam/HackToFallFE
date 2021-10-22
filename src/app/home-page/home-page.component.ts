import { Component, OnInit } from '@angular/core';
import { FaqsService } from './faqs.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [
    FaqsService
  ]
})
export class HomePageComponent implements OnInit {
  faqs:any=[]
  constructor(
    private faqsService:FaqsService
  ) { }
  ngOnInit(): void {
    this.faqs=this.faqsService.getFaqs();
  }
  displayThis(i:number){
    if(this.faqs[i].display===true){
      this.faqs[i].display=false;
    }else{
      this.faqs[i].display=true;
    }
  }
}
