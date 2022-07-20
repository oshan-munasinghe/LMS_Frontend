import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup,FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { delay } from 'rxjs';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [MessageService]
})
export class SignupComponent implements OnInit {
  name= new FormControl();
  age=new FormControl();
  gender = new FormControl();
  school= new FormControl();
  phoneno = new FormControl();
  uemail = new FormControl();
  password = new FormControl();
  constructor(private formBuilder:FormBuilder,private messageService: MessageService,private _http:HttpClient,private router:Router) { }
  signupForm!:FormGroup
  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      name:[''] ,
      age:[''],
      gender:[''],
      school:[''],
      phoneno:[''],
      uemail:[''],
      password:['']
    })
  }
  signup(){
    this._http.post<any>("http://localhost:9000/student/add",this.signupForm.value).subscribe(res=>{
      //alert("Registration Sucessfull");
      this.MSG("success","Sucsess","Registration is Sucessfully");
      delay(1)
      this.signupForm.reset();
      //this.router.navigate(['/']);
    },err =>{
      //alert("Failed Registration"+err);
      this.MSG("error","Error","Failed Registration"+err);
    })
  }
  MSG(type:string,title:string,msg: string){
    this.messageService.add({key: 'tc', 
    severity:type, 
    summary: title, 
    detail: msg});
  
  }
}
