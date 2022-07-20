import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { studentService } from '../services/student.service';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup,FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PassChangeComponent } from './pass-change/pass-change.component';
import { authenticService } from '../services/authentic.service';

@Component({
  selector: 'app-student-d',
  templateUrl: './student-d.component.html',
  styleUrls: ['./student-d.component.css']
})
export class StudentDComponent implements OnInit {
  sName='';
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
  

  constructor(public dialogref:MatDialogRef<StudentDComponent> 
    ,private _studentService: studentService,private _http:HttpClient,
    private pass_ch:MatDialog,private $Auth:authenticService,private formBuilder:FormBuilder,private _toastr:ToastrService, private router:Router) { 
      this.studentDt()
      $Auth.$_Authenticate('Sid','/',router);//time-out
    }
    updateForm!:FormGroup

  ngOnInit(): void {
    this.updateForm=this.formBuilder.group({
      name:[''],
      age:[''],
      gender:[''],
      grade:[''],
      school:[''],
      phoneno:[''],
      uemail:[''],
      
    })
  }

close(){
  this.dialogref.close();
  
}
studentDt(){
  var sst=sessionStorage.getItem('Sid');
  if(sst!=null){
 this._studentService.stStudent().subscribe(std=>{
  
  this.sName=std.name;
  this.REG_NO=std.regNo;
  this.sAge=std.age;
  this.sSchool=std.school;
  this.sEmail=std.uemail;
  this.sPhone=std.phoneno;
  this.sGrade=std.grade;
  this.sGender=std.gender;
 })
}else{
  console.log("Error Session Time out")
}

}
clear(){
  this.sName="";
 
  this.sAge="";
  this.sSchool="";
  this.sEmail="";
  this.sPhone="";
  this.sGrade="";
  this.sGender="";
}
update(){
  // mandatory Validators**************************************
  if(this.updateForm.value.name==""){
    this._toastr.error('Name is Required');
  }
  if(this.updateForm.value.uemail==""){
    this._toastr.error('Email is Required');
  }
  if(this.updateForm.value.grade==""){
    this._toastr.error('Grade is Required');
  }
  
  else{
// validator****************************************************
    if(this.updateForm.value.age==""||
      this.updateForm.value.school==""|| this.updateForm.value.phoneno=="" ||
      this.updateForm.value.gender==""){
      this._toastr.warning('Some fields are Missing',"Warning !");
  }
  var sst=sessionStorage.getItem('Sid');//session storage get<
  if(sst!=null){
  this._http.put("http://localhost:9000/student/update/"+sst,this.updateForm.value).subscribe(res=>{
  //alert("Updated");
  this.showToastr();
  this.dialogref.close();
  //console.log(this.updateForm.value.name);
  
  })
  }
  else{
    console.log("Session TimeOut");
    this._toastr.warning("Session Time-Out","",{timeOut:500, progressBar:true ,progressAnimation:'increasing'});
    this.dialogref.close();
    this.router.navigate(['/']);
  }
}
}
showToastr(){
  this._toastr.success('Updated',"",{
    timeOut:5000
  })
}
//password Change
pass_Change(){
    const _paswCh=new MatDialogConfig();
    this.pass_ch.open(PassChangeComponent,_paswCh);
    //this.dialogref.close();
    _paswCh.disableClose=true;
    _paswCh.autoFocus=true;
    _paswCh.width="30%";
  }
}
