import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {
  me={
    name:"Kamlesh",
    img:"https://cdn.pixabay.com/photo/2017/02/15/20/33/floral-2069810_960_720.png",
    time:100,
    deleting:true,
    credit:0,
    noOfDeleteLeft:5,
  }
  constructor() { }
  getMeDetails(){
    return this.me;
    
  }
  reduceplantTreeTOOne(){
    this.me.credit=this.me.credit+5;
    
  }
}
