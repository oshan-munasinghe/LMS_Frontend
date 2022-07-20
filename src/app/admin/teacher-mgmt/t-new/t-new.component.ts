import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { teacherService } from 'src/app/services/teacher.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-t-new',
  templateUrl: './t-new.component.html',
  styleUrls: ['./t-new.component.css'],
  providers: [MessageService]
})
export class TNewComponent implements OnInit {
  tName="";
  tNo="";
  tSubject="";
  tPhone="";
  tEmail="";
  tPass="";

  t_name= new FormControl();
  t_no= new FormControl();
  subject= new FormControl();
  t_email= new FormControl();
  t_phone= new FormControl();
  t_pass= new FormControl();
  

  constructor(private formBuilder:FormBuilder,public dialogref:MatDialogRef<TNewComponent>,
    private _http:HttpClient,private _teacherService:teacherService,private router:Router,private messageService:MessageService) { }
    newForm!:FormGroup
  ngOnInit(): void {
    this.newForm=this.formBuilder.group({
      _id:[''],
      t_name:[''],
      t_no:[''],
      subject:[''],
      t_email:[''],
      t_phone:[''],
      t_pass:[''],
  })
  }
  newteacher(){
    console.log(this.newForm)
    var _name=this.newForm.value.t_name;
    var _sub=this.newForm.value.subject;
    var _email=this.newForm.value.t_email;
    var _ID=this.newForm.value.t_no;
    var _pass=this.newForm.value.t_pass;
        if(_name==""){
            Swal.fire('ERROR!', 'Empty Name', 'error')
        }
        if(_sub==""){
          Swal.fire('ERROR!', 'Empty Subject', 'error')
        }
        if(_email==""){
          Swal.fire('ERROR!', 'Empty Email', 'error')
        }
        if(_ID==""){
          Swal.fire('ERROR!', 'Empty ID', 'error')
        }
        if(_pass==""){
          Swal.fire('ERROR!', 'Empty Password', 'error')
        }
        if(_name!=""&&_sub!==""&&_email!=""&&_ID!=""&&_pass!=""){
            this._teacherService.addTeacher(this.newForm.value).subscribe(res=>{
              this.SucessAlert("Sucessfully registered Teacher")
          },err=>{
              console.log("Teacher register err ☹️ "+err)
          })
    }
       
  }
  close(){
    this.dialogref.close();
    setTimeout("location.reload(true);",1500)
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
    this.newForm.reset();
  }
  MSG(type:string,title:string,msg: string){
    this.messageService.add({key: 'tc', 
    severity:type, 
    summary: title, 
    detail: msg});
  
  }
}
