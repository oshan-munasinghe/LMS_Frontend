import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,ReactiveFormsModule, FormControl ,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MessageService]
})
export class AdminComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private _toast:ToastrService,
    private _http:HttpClient, private router:Router,
    private messageService: MessageService,private titleService:Title) { 

      this.titleService.setTitle("LMS-Admin");
    }
    loginForm!:FormGroup
  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:['',Validators.required],
      password:['']
    })
  }
  login(){
    if(this.loginForm.value.email==""||this.loginForm.value.password==""){
      this.messageService.add({key: 'tc', 
      severity:'error', 
      summary: 'Error', 
      detail: 'Username and Password should not empty'});
    }
    else{
    this._http.get<any>("http://localhost:9000/admin/").subscribe(res=>{
      const user=res.find((a:any)=>{
        
        return a.a_email === this.loginForm.value.email && a.a_pass===this.loginForm.value.password
        
      })
    
     
      if(user){
        //alert("user Login sucess");
        this._toast.success("","Sucessfully Login ",{
          timeOut:3000
        });
        
        sessionStorage.setItem('Aid',user._id);
        //alert(user._id);
        this.loginForm.reset();
        this.router.navigate(['/a/dashboard']);
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
        sessionStorage.removeItem('Aid');
        //console.log(d);
        console.log("session timeout!!");
        
      }
    })
}
  student_l(){
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/'])
    );
    window.open(url,'_blank')
  }
  teacher_l(){
    
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['t'])
    );
    window.open(url,'_blank')
  }

}
