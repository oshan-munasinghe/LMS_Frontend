import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { ConfirmationService, MessageService } from 'primeng/api';
import { authenticService } from 'src/app/services/authentic.service';
import { teacherService } from 'src/app/services/teacher.service';
import { TNewComponent } from './t-new/t-new.component';
export interface teacher{
  _id:"",
  t_name:"",
  t_no:"",
  subject:"",
  t_email:"",
  t_phone:"",
  t_pass:""
  }

@Component({
  selector: 'app-teacher-mgmt',
  templateUrl: './teacher-mgmt.component.html',
  styleUrls: ['./teacher-mgmt.component.css'],
  providers: [ConfirmationService,MessageService]
})
export class TeacherMgmtComponent implements OnInit {
  Teacher!:teacher[]
  constructor(private confirmationService: ConfirmationService,private _teacherService:teacherService, private formBuilder:FormBuilder,
    private router:Router,private _toast:ToastrService,
    private $Auth:authenticService ,private dialog:MatDialog,private messageService: MessageService) { 
      $Auth.$_Authenticate('Aid','/sys-admin',router);//time-out
    }
  
  ngOnInit(): void {
    this._teacherService.getTeachers().subscribe (data=>{
      this.Teacher=data;
      console.log(data.t_name);
    })
  }
  delete(id: any){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to Delete?',
      accept: () => {
          this._teacherService.deleteTeacher(id).subscribe(data=>{
        this.MSG("info","Delete","Deleted Data");
      
        setTimeout("location.reload(true);",1500)
        
      })
      }
  });
}
new(){
  const dialogConfig=new MatDialogConfig();
  dialogConfig.disableClose=true;
  dialogConfig.autoFocus=true;
  dialogConfig.width="60%";
this.dialog.open(TNewComponent,dialogConfig)  ;
}
  MSG(type:string,title:string,msg: string){
    this.messageService.add({key: 'tc', 
    severity:type, 
    summary: title, 
    detail: msg});
  
  }
}
