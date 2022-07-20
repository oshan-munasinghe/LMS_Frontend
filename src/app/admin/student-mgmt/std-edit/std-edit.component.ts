import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog,MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { studentService } from 'src/app/services/student.service';
import { MessageService } from 'primeng/api';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { APassChangeComponent } from './a-pass-change/a-pass-change.component';
import { authenticService } from 'src/app/services/authentic.service';
// import { myMsgService } from 'src/app/services/myMsg.service';
export interface student{
  
  regNo:"",
  name:"",
  age:"",
  gender:"",
  grade:"",
  school:"",
  phoneno:"",
  uemail:"",
  password:""
}

@Component({
  selector: 'app-std-edit',
  templateUrl: './std-edit.component.html',
  styleUrls: ['./std-edit.component.css'],
  providers: [MessageService]
})
export class StdEditComponent implements OnInit {
  _id="";
  sName="";
  REG_NO="";
  sAge="";
  sSchool="";
  sPhone="";
  sGrade="";
  sEmail="";
  sGender="";

  regNo=new FormControl();
  name= new FormControl();
  age=new FormControl();
  gender = new FormControl();
  grade=new FormControl();
  school= new FormControl();
  phoneno = new FormControl();
  uemail = new FormControl();
 
  Student!:student[];
  constructor( private formBuilder:FormBuilder,private _http:HttpClient,
    private router:Router,private dialog:MatDialog,private STD:studentService,
    private Arouter:ActivatedRoute ,private $Auth:authenticService,private messageService: MessageService,
    private _toast:ToastrService){ 
      $Auth.$_Authenticate('Aid','/sys-admin',router);//time-out
      this.getStudentD()
    }
    updateForm!:FormGroup
  ngOnInit(): void {
    this.updateForm=this.formBuilder.group({
      regNo:[''],
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
    //this.dialogref.close();
  }
  update(){
      var _regNo=this.updateForm.value.regNo;
      var _name=this.updateForm.value.name;
      var _grade=this.updateForm.value.grade;
      var _email=this.updateForm.value.uemail;
      
      if(_email==""){
        
        this.MSG("error","Error","Empty Email");
      }
      if(_regNo==""){
        this.MSG("error","Error","Empty Registration Number");
      }
      if(_name==""){
        this.MSG("error","Error","Empty Name");
      }
      if(_email!=""&&_regNo!="" &&_name!=""){
        var SID=this._id;
        if(SID!=""&&_regNo!=undefined&&_email!=undefined){
          this._http.put("http://localhost:9000/student/update/"+SID,this.updateForm.value).subscribe(res=>{
              
            this.MSG("success","Sucsess","Updated Student")
              })
              }else{
                this.MSG("error","Error","Must be add Registration Number")
              }
            }  
      else{

      }

  }
  clear(){

  }
  getStudentD(){
    this.STD.getonestudent(this.Arouter.snapshot.params['id']).subscribe((result)=>{
      //console.log(result.regNo);
     
      this.Student=result;
      this._id=result._id;
      this.sName=result.name;
      this.REG_NO=result.regNo;
      this.sAge=result.age;
      this.sSchool=result.school;
      this.sEmail=result.uemail;
      this.sPhone=result.phoneno;
      this.sGrade=result.grade;
      this.sGender=result.gender;
  })
  }
  next(){
    this.router.navigate(['/a/student-mgmt']);
  }
  MSG(type:string,title:string,msg: string){
    this.messageService.add({key: 'tc', 
    severity:type, 
    summary: title, 
    detail: msg});
  
  }
  passch(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
  this.dialog.open(APassChangeComponent,dialogConfig)  ;
  }
}
