import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { studentService } from 'src/app/services/student.service';



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
  selector: 'app-std-report',
  templateUrl: './std-report.component.html',
  styleUrls: ['./std-report.component.css']
})
export class StdReportComponent implements OnInit {
  Student!:student[];
  constructor(private _studentService:studentService, private formBuilder:FormBuilder,
    private router:Router,private _toast:ToastrService,private dialog:MatDialog,private $Auth:authenticService) { 

    }
    
  ngOnInit(): void {
    this._studentService.getStudents().subscribe(data=>
      {
        this.Student=data;
        //console.log(data);
        
      })
  }
  getStudent(){
    this._studentService.getStudents().subscribe(data=>
      {
        this.Student=data;
        //console.log(data);
        
      })
  }
  exportPdf(){
          
  }
  exportExcel(){

  }
  saveAsExcelFile(buffer: any, fileName: string){

  }
}
