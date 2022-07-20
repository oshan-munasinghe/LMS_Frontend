import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,ReactiveFormsModule, FormControl ,Validators } from '@angular/forms';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
//import { StdioNull } from 'child_process';
import { studentService } from '../services/student.service';
import { MatDialog , MatDialogConfig } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import { StudentDComponent } from '../student-d/student-d.component';
import { authenticService } from '../services/authentic.service';

export interface student{
  _id: "",
  name: "a",
  age: 0,
  gender: "",
  grade: "",
  school: "",
  phoneno: "",
  uemail: "",
  password: "",
  displayModal: boolean;
  
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
sName='';
REG_NO="";
Student:student[]=[]; 
verify="";
  displayModal!: boolean;
  displayModal2!:boolean;
  displayModal3!:boolean;
 
  constructor(private _studentService: studentService,
    private formBuilder:FormBuilder,private _http:HttpClient,
    private router:Router,private dialog:MatDialog,private $Auth:authenticService) { 
      $Auth.$_Authenticate('Sid','/',router);//time-out
   // this.authenticate();
    this.fetchdata();
    this.studentDt();
    
    
  }
  
  ngOnInit(): void {
    
  }
 
  //setting /edit user
  setting(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
  this.dialog.open(StudentDComponent,dialogConfig)  ;
  }
  //session timeout
  authenticate(){
    var sst=sessionStorage.getItem('Sid');
    if(sst==null){
      this.router.navigate(['/']);
    }
  }
  //testing
  fetchdata(){
    this._studentService.getStudents().subscribe(data=>{
     // console.log(data);
      //this.Student=data;
    
    })
  }
    //get student name
    studentDt(){
      var sst=sessionStorage.getItem('Sid');
      if(sst!=null){
     this._studentService.stStudent().subscribe(std=>{
      
      this.sName=std.name;
      this.REG_NO=std.regNo;
      if(std.regNo==null|| std.regNo==""){
        this.verify="Need to Vrify";
      }
     })
    }else{
      console.log("Error Session Time out")
    }

    }
    showModalDialog() {
      this.displayModal = true;
  }
  showModalDialog2() {
    this.displayModal2 = true;
}
showModalDialog3() {
  this.displayModal3 = true;
}
}
