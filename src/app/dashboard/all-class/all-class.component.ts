import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Injectable } from "@angular/core";
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { studentService } from 'src/app/services/student.service';
import {ConfirmationService, ConfirmEventType, MessageService} from 'primeng/api';
import { classesService } from 'src/app/services/classes.service';
import { VClassComponent } from './v-class/v-class.component';
import { authenticService } from 'src/app/services/authentic.service';


export interface classes{
  _id:"",
  classCode:"",
  className:"",
  subject:"",
  grade:0,
  t_name:"",
  day:"",
  time:"",
  fee:"",
  discription:""
}
var ids="";
@Component({
  selector: 'app-all-class',
  templateUrl: './all-class.component.html',
  styleUrls: ['./all-class.component.css'],
  providers: [MessageService]
})


export class AllClassComponent implements OnInit {
  Classes!:classes[];
  
  displayModal!: boolean;
  constructor(private _classService:classesService, 
   private dialog:MatDialog,private $Auth:authenticService,private router:Router) {
    $Auth.$_Authenticate('Sid','/',router);//time-out
     }

  ngOnInit(): void {
    this._classService.getClasses().subscribe(data=>{
      this.Classes=data
      //console.log(data)
    })
  }

  showModalDialog() {
    this.displayModal = true;
  }
 
passDT(){
  const xcv="return my dat : Oshan"
  return xcv;
}
  

}
