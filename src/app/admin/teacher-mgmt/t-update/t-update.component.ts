import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog,MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { teacherService } from 'src/app/services/teacher.service';
import { MessageService } from 'primeng/api';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { authenticService } from 'src/app/services/authentic.service';

@Component({
  selector: 'app-t-update',
  templateUrl: './t-update.component.html',
  styleUrls: ['./t-update.component.css'],
  providers: [MessageService]
})
export class TUpdateComponent implements OnInit {
  _id="";
  tNo="";
  TNAME="";
  SUBJECT="";
  TEmail="";
  TPhone="";
  Qalify="";
  Experiance=""

  t_name=new FormControl();
  t_no=new FormControl();
  subject=new FormControl();
  t_email=new FormControl();
  t_phone=new FormControl();
  t_pass=new FormControl();
  t_experiance=new FormControl();
  t_qulaification=new FormControl();


  constructor(private formBuilder:FormBuilder,private _http:HttpClient,
    private router:Router,private dialog:MatDialog,private TE:teacherService,
    private Arouter:ActivatedRoute ,private messageService: MessageService,
    private _toast:ToastrService,$Auth:authenticService) {
      $Auth.$_Authenticate('Aid','/sys-admin',router);//time-out
      this.tTeachers()
     }
     updateForm!:FormGroup
  ngOnInit(): void {
    this.updateForm=this.formBuilder.group({
      t_name:[''],
      t_no:[''],
      subject:[''],
      t_email:[''],
      t_phone:[''],
      t_pass:[''],
      t_qulaification:[''],
      t_experiance:['']
      
    })
  }
 
  update(){
    var _tno=this.updateForm.value.t_no;
    var _tname=this.updateForm.value.t_name;
    var _subject=this.updateForm.value.subject;
    var _temail=this.updateForm.value.t_email;
    if(_tno==""){
      this.MSG("error","Error","Empty ID");
    }
    if(_tname==""){
      this.MSG("error","Error","Empty Name");
    }
    if(_subject==""){
      this.MSG("error","Error","Empty Subject");
    }
    if(_temail==""){
      this.MSG("error","Error","Empty Email");
    }
    if(_tno!=""&&_tname!=""&&_subject!=""&&_temail!=""){
    this.TE.updateTeacher(this.Arouter.snapshot.params['id'],this.updateForm.value)
    .subscribe(res=>{
      this.MSG("success","Sucsess","Updated Teacher")
    })
  }else{
    
  }
  }
  next(){
    this.router.navigate(['/a/teacher-mgmt']);
  }
  tTeachers(){
    this.TE.getoneteacher(this.Arouter.snapshot.params['id']).subscribe((result)=>{
      //console.log(result.t_name);
     this._id=result._id;
     this.tNo=result.t_no;
     this.TNAME=result.t_name;
    this.SUBJECT=result.subject;
    this.TPhone=result.t_phone;
    this.TEmail=result.t_email;
    this.Experiance=result.t_experiance;
    this.Qalify=result.t_qulaification;
     
  })
  }
  close(){
    this.close();
  }
  clear(){
    this.updateForm.reset();
  }
  passch(){

  }
  MSG(type:string,title:string,msg: string){
    this.messageService.add({key: 'tc', 
    severity:type, 
    summary: title, 
    detail: msg});
  
  }
  cancel(){

  }
}
