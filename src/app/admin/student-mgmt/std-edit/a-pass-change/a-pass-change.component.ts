import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup,FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { studentService } from 'src/app/services/student.service';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-a-pass-change',
  templateUrl: './a-pass-change.component.html',
  styleUrls: ['./a-pass-change.component.css'],
  providers: [MessageService]
})
export class APassChangeComponent implements OnInit {
  cpass= new FormControl();
  password= new FormControl();
  constructor(private psw_dialogref:MatDialogRef<APassChangeComponent>,
    private dt_dialogref:MatDialog,
    private _studentService: studentService,private _http:HttpClient,
    private formBuilder:FormBuilder,private _toastr:ToastrService,private messageService: MessageService) { }
    passchange!:FormGroup
  ngOnInit(): void {
    this.passchange=this.formBuilder.group({
      cpass:[''],
      password:['']
})
  }
  close(){
    this.messageService.add({key: 'tc', severity:'warn', summary: 'Empty Fields', detail: 'current password Empty'});
    this.psw_dialogref.close();
    //this.dt_dialogref.open(StudentDComponent,Dconf)
   
  }
  passChange(){
    var currentPass=this.passchange.value.cpass;
    var newPassw=this.passchange.value.password;
    if(newPassw==""){

    }
    if(newPassw!=""){
      this._http.put("http://localhost:9000/student/update/",this.passchange.value).subscribe(res=>{
          
        this.close();
        this._toastr.success("Changed Password","Sucessfully")
        })
        }
        else{
          console.log("from password Change")
         
        
    
    }
  }
}
