import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StdEditComponent } from './std-edit/std-edit.component';
import { ToastrService } from 'ngx-toastr';
import { studentService } from 'src/app/services/student.service';

import { NewStdComponent } from './new-std/new-std.component';
import {ConfirmationService, ConfirmEventType, MessageService} from 'primeng/api';
import { authenticService } from 'src/app/services/authentic.service';
export interface student{
  _id:"",
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
  selector: 'app-student-mgmt',
  templateUrl: './student-mgmt.component.html',
  styleUrls: ['./student-mgmt.component.css'],
  providers: [ConfirmationService,MessageService]
})

export class StudentMgmtComponent implements OnInit {
Student!:student[];
regvalid="";
  constructor(private confirmationService: ConfirmationService,private _studentService:studentService, private formBuilder:FormBuilder,
    private router:Router,private _toast:ToastrService,private dialog:MatDialog,private $Auth:authenticService,private messageService: MessageService) {
      $Auth.$_Authenticate('Aid','/sys-admin',router);
    
   }

  ngOnInit(): void {
    this._studentService.getStudents().subscribe(data=>
      {
        this.Student=data;
        //console.log(data);
        
      })
  }


reg_Valid(){
  this._studentService.getStudents().subscribe(data=>
    {
      this.Student=data;
      //console.log(data);
      
    })
  }
  new(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
  this.dialog.open(NewStdComponent,dialogConfig)  ;
  }
  delete(id: any){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to Delete?',
      accept: () => {
          this._studentService.deleteStudent(id).subscribe(data=>{
        this.MSG("info","DeLete","Deleted Data");
      
        setTimeout("location.reload(true);",1500)
        
      })
      }
  });

      
  
}
MSG(type:string,title:string,msg: string){
  this.messageService.add({key: 'tc', 
  severity:type, 
  summary: title, 
  detail: msg});

}

}