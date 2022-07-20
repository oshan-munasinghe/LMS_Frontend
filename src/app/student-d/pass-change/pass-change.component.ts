import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

import { FormControl, Validators } from '@angular/forms';
import { FormGroup,FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentDComponent } from '../student-d.component';
import { studentService } from 'src/app/services/student.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-pass-change',
  templateUrl: './pass-change.component.html',
  styleUrls: ['./pass-change.component.css'],
  providers: [MessageService]
})
export class PassChangeComponent implements OnInit {
  sPass="";

    //from html page
    cpass= new FormControl();
    password= new FormControl();
  constructor(private psw_dialogref:MatDialogRef<PassChangeComponent>,
    private dt_dialogref:MatDialog,
    private _studentService: studentService,private _http:HttpClient,
    private formBuilder:FormBuilder,private _toastr:ToastrService,private messageService: MessageService) { 
      this.studentDt();
    }
    
    passchangeGr!:FormGroup
  ngOnInit(): void {
    this.passchangeGr=this.formBuilder.group({
          cpass:[''],
          password:['']
    })
  }
  close(){
    this.messageService.add({key: 'tc', severity:'warn', summary: 'Empty Fields', detail: 'current password Empty'});
    this.psw_dialogref.close();
    //this.dt_dialogref.open(StudentDComponent,Dconf)
   
  }
  //--------------Get St Pass
  studentDt(){
    var sst=sessionStorage.getItem('Sid');
    if(sst!=null){
   this._studentService.stStudent().subscribe(std=>{
    
    this.sPass=std.password;
   
   })
  }else{
    console.log("Error Session Time out")
  }
}
passChange(){
  console.log("start");
    var currentPass=this.passchangeGr.value.cpass;
    var newPassw=this.passchangeGr.value.password;
      if(currentPass=="" ){
        //alert("empty");
        this._toastr.error("current password Empty","Empty Fields")
       
      }
      if(newPassw==""){
        this._toastr.error("New Password Empty","Empty Fields")
      }
      if(this.sPass!=currentPass){
          // alert("wrong current Pass");
          this._toastr.error("Wrong Current Password");
      }
      if(currentPass!=""&&newPassw!="" ){
        var sst=sessionStorage.getItem('Sid');//session storage get<
        if(sst!=null){
          this._http.put("http://localhost:9000/student/update/"+sst,this.passchangeGr.value).subscribe(res=>{
          
          this.close();
          this._toastr.success("Changed Password","Sucessfully")
          })
          }
          else{
            console.log("from password Change")
            console.log("timeout")
            this._toastr.warning("Time-Out");
          }
      }
  }
}
