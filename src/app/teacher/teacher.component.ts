import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,ReactiveFormsModule, FormControl ,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { MessageService } from 'primeng/api';
import {Title} from "@angular/platform-browser"
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
  providers: [MessageService]
})
export class TeacherComponent implements OnInit {
 

  constructor(private router:Router,private titleService:Title,private _toast:ToastrService,  
    private _http:HttpClient,private messageService: MessageService,private formBuilder:FormBuilder) { 
    this.titleService.setTitle("LMS-Teacher");
  }
  loginForm!:FormGroup
  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:['',Validators.required],
      password:['']
    })
  }
  login(){
    var _email = this.loginForm.value.email;
    var _pass = this.loginForm.value.password;
    if(_email==""||_pass==""){
      this.messageService.add({key: 'tc', 
      severity:'error', 
      summary: 'Error', 
      detail: 'Username and Password should not empty'});
    }
    else{
    this._http.get<any>("http://localhost:9000/teacher/").subscribe(res=>{
      const user=res.find((a:any)=>{
        
        return a.t_email === _email && 
        a.t_pass=== _pass;
        
      })
      if(user){
        this._toast.success("","Sucessfully Login ",{
          timeOut:3000
        });
        sessionStorage.setItem('Tid',user._id);
        //alert(user._id);
        this.loginForm.reset();
        this.router.navigate(['t/dashboard']);
        this.autoLogOut();
      }else{
        this.messageService.add({key: 'tc', 
        severity:'error', 
        summary: 'Error', 
        detail: 'Bad username or Password'});
      }
    
    },err=>{
      this._toast.error("Server side Error ! \nTry again few moment later","ERROR",{
         timeOut:100000
         });
      console.log("Network Problem"+err);
      this.router.navigate(['error'])
        })
    }
  }
  autoLogOut(){
    const ota$=timer(7200,1000);
    ota$.subscribe((d)=>{
      //console.log(d);
      if(d==600){
        sessionStorage.removeItem('Tid');
        //console.log(d);
        console.log("session timeout!!");
        
      }
    })
  }
}
