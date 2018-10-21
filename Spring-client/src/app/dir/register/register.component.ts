import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
     user:User=new User();
     name:string;
  constructor(private router: Router , private userService:UserService) { }
    
  createUser():void{
    console.log(this.user);
  this.userService.create(this.user)
       .subscribe
       (data => {
         alert("user register sussessfulL")
        this.router.navigate(['/login']);
      
       }); 
  }
  
  ngOnInit() {
    this.userService.cast.subscribe(name=>{
      if(name !="null")
         this.name=name;
     /*  else
     this.router.navigate(["/login"])*/});
   }
   
  }


