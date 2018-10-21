import { Component, OnInit } from '@angular/core';
import { Child } from '../../model/child';
import { RegisterformService } from '../../service/registerform.service';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 name="";

 n1=['',1,2,3,4,5,6,7,8,9,10,11,12];
 n2=['',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,
     26,27,28,29,30,31,32,33,34,35,36,37,38,39,41,45,46,47,48,49,50,51,52,53,
     54,55,56,57,58,59];
 ap=['','am','pm'];
 gender=['','Male','Female','Other'];
 addrestype=['Own','Home','Other'];
 delivary=['','normal','vvvv','vvvvnn'];
 status=['Live','Dead'];
 child:Child=new Child;
  constructor(private router: Router , private registerService:RegisterformService,
    private userService:UserService) { }

  createRegistration():void{
     console.log(this.child);
     this.registerService.Registration(this.child).subscribe
       (data=>{
         alert("registration success");
       })
  }
  ngOnInit() {
    this.userService.cast.subscribe(name=>{
      if(name !="null")
         this.name=name;
     /*  else{
     this.router.navigate(["/login"])
     alert("first login");}*/
    });
  }

}
