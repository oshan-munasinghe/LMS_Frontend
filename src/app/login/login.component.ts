import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl ,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {



  constructor(private formBuilder:FormBuilder,private _toast:ToastrService,
     private _http:HttpClient, private router:Router,private messageService: MessageService) { 
      
  }
  loginForm: FormGroup | any;
  ngOnInit(): void {
   this.loginForm=this.formBuilder.group({
      email: new FormControl(),
      password:new FormControl()
    });
  }
 
  login(){
    if(this.loginForm.value.email==""||this.loginForm.value.password==""){
      this.messageService.add({key: 'tc', 
      severity:'error', 
      summary: 'Error', 
      detail: 'Username and Password should not empty'});
    }
    else{
    this._http.get<any>("http://localhost:9000/student/").subscribe(res=>{
      const user=res.find((a:any)=>{
        
        return a.uemail === this.loginForm.value.email && a.password===this.loginForm.value.password
        
      })
    
     
      if(user){
        //alert("user Login sucess");
        this._toast.success("","Sucessfully Login ",{
          timeOut:3000
        });
        
        sessionStorage.setItem('Sid',user._id);
        //alert(user._id);
        this.loginForm.reset();
        this.router.navigate(['dashboard']);
        this.autoLogOut();
      }else{
        this.messageService.add({key: 'tc', 
        severity:'error', 
        summary: 'Error', 
        detail: 'Bad username or Password'});
        //alert("login Failed");
        // this._toast.error("Login Failed !","",{
        //   timeOut:10000
        // });
        
      
    }
    },err=>{
      this._toast.error("Server side Error ! \nTry again few moment later","ERROR",{
         timeOut:100000
         });
      console.log("Network Problem");//ptionsl `+err`
      this.router.navigate(['error'])
    
    })
  }
}

autoLogOut(){
    const ota$=timer(7200,1000);
    ota$.subscribe((d)=>{
      //console.log(d);
      if(d==6000){
        sessionStorage.removeItem('Sid');
        //console.log(d);
        console.log("session timeout!!");
        
      }
    })
}
}
