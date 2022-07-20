import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-std',
  templateUrl: './new-std.component.html',
  styleUrls: ['./new-std.component.css'],
  providers: [MessageService]
})
export class NewStdComponent implements OnInit {
  sName="";
  REG_NO="";
  sAge="";
  sSchool="";
  sPhone="";
  sGrade="";
  sEmail="";
  sGender="";

  name= new FormControl();
  age=new FormControl();
  gender = new FormControl();
  grade=new FormControl();
  school= new FormControl();
  phoneno = new FormControl();
  uemail = new FormControl();

  constructor(private formBuilder:FormBuilder,public dialogref:MatDialogRef<NewStdComponent>,
    private _http:HttpClient,private router:Router,private messageService:MessageService) { 

  }
  newForm!:FormGroup
  ngOnInit(): void {
    this.newForm=this.formBuilder.group({
      regNo:[''],
      name:[''],
      age:[''],
      gender:[''],
      grade:[''],
      school:[''],
      phoneno:[''],
      uemail:[''],
      password:['']
  })
  }
  newSt(){
    var _regNo=this.newForm.value.regNo;
    var _name=this.newForm.value.name;
    var _grade=this.newForm.value.grade;
    var _email=this.newForm.value.uemail;
    var _pass=this.newForm.value.password;
    if(_regNo==""){
      Swal.fire('ERROR!', 'Empty Register Number', 'error')
        this.MSG("error","Error","Empty Register Number");
      }
    if(_name==""){
      Swal.fire('ERROR!', 'Empty Name', 'error')
        this.MSG("error","Error","Empty Name");
      }
    if(_email==""){
      Swal.fire('ERROR!', 'Empty Email', 'error')
        this.MSG("error","Error","Email");
      }
    if(_pass==""){
      Swal.fire('ERROR!', 'Empty Password', 'error')
        this.MSG("error","Error","Password");
      }
    if(_name!=""&&_regNo!=""&&_email!=""&&_pass!=""){
        this._http.post<any>("http://localhost:9000/student/add",this.newForm.value).subscribe(res=>{
          // 
          this.SucessAlert("Sucessfully registered Student")
          this.MSG("success","Success","Student Registered")
          this.newForm.reset();
          // this.router.navigate(['/a/student-mgmt']);
        },err =>{
          this.MSG("error","Error","Failed Registration")
        })
  }
  }
  SucessAlert(msg:string) {
    Swal.fire({
      position: 'top-right',
      icon: 'success',
      title: msg,
      showConfirmButton: false,
      timer: 1500
    })
  }
  clear(){
    this.sName="";
    this.sAge="";
    this.REG_NO="";
    this.sGrade="";
    this.sGender="";
    this.sEmail="";
    this.sSchool="";
    this.sPhone="";
    this.newForm.reset();
    
  }
  close(){
    this.dialogref.close();
    setTimeout("location.reload(true);",1500)
  }
  MSG(type:string,title:string,msg: string){
    this.messageService.add({key: 'tc', 
    severity:type, 
    summary: title, 
    detail: msg});
  
  }
}
