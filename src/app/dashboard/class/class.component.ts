import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,ReactiveFormsModule, FormControl ,Validators } from '@angular/forms';
import { HttpBackend, HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Router } from '@angular/router';
import { delay, timer } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { getMatIconNameNotFoundError } from '@angular/material/icon';
import { TransitiveCompileNgModuleMetadata } from '@angular/compiler';
import { ConfirmationService, MessageService } from 'primeng/api';
import { classesService } from 'src/app/services/classes.service';
export interface classes{
  _id: "",
  s_name: "",
  s_regno: "",
  class_code: "",
  class_name: "",
  t_name: "",
  payment: any,
  join: any,
}

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
  providers: [ConfirmationService,MessageService]
})
export class ClassComponent implements OnInit {
  url="http://localhost:9000"
  sRegno=""
  sGrade=""
  sName=""
  Sid=""
  PAY=""
  constructor(private _http: HttpClient,private messageService: MessageService,
    private confirmationService: ConfirmationService,private _classservice:classesService
    ,private _classService:classesService) { 

  }
  Classes!:classes[];
  ngOnInit(): void {
    this.getSName()
    // this._classService.getClasses().subscribe(data=>{
    //   this.Classes=data
    //   //console.log(data)
    // })
  }
  getSName(){
    const sst = sessionStorage.getItem('Sid');
    this._http.get<any>(this.url+"/student/").subscribe(res => {
      const user = res.find((a: any) => {
        if(sst==a._id){
          this.Sid=a._id
          this.sRegno=a.regNo
          this.sGrade=a.grade
          this.sName=a.name
          
          console.log(this.sRegno)
        }

      })
    })
  }
  geteClass(){
    delay(0.5)
    this._http.get<any>(this.url+"/exclasses").subscribe((response)=>{
       this.Classes=response
       //filter values

       this.Classes=this.Classes.filter(res=>{
        return res.s_regno.match(this.sRegno)
        
      })
      
      })
      
  }
  deleteClass(id:any){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to Delete?',
      accept: () => {
        this._classservice.deleteEClasses(id).subscribe(data=>{
          this.MSG("info","DeLete","Deleted Data 🚮");
          //alert("deleted")
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
