import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,ReactiveFormsModule, FormControl ,Validators } from '@angular/forms';
import { HttpBackend, HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Router } from '@angular/router';
import { delay, timer } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { getMatIconNameNotFoundError } from '@angular/material/icon';
import { TransitiveCompileNgModuleMetadata } from '@angular/compiler';

export interface classes{
  _id:"",
  classCode:"",
  className:"",
  subject:"",
  grade:0,
  t_name:"",
  day:"",
  startTime:"",
  endTime:"",
  fee:"",
  discription:""
}
@Component({
  selector: 'app-mycls',
  templateUrl: './mycls.component.html',
  styleUrls: ['./mycls.component.css']
})
export class MyclsComponent implements OnInit {
  
  url="http://localhost:9000"
  tname=""
  clsName:any[]=[]
  clsCode:any[]=[]
  clsid:any[]=[]
  clz={}
  clzArray:any[]=[]
  i:any
  
  constructor(private _http: HttpClient,private router:Router) { 
   
   
   
   
   
  }
  Classes!:classes[];
  ngOnInit(): void {
    this.getTname();
    //this.getClass()

    }
  getTname(){
    const sst = sessionStorage.getItem('Tid');
    this._http.get<any>(this.url+"/teacher/").subscribe(res => {
      const user = res.find((a: any) => {
        if(sst==a._id){
          this.tname=a.t_name
          console.log(this.tname)
        }

      })
    })
  }
getClass(){
  delay(0.5)
  this._http.get<any>(this.url+"/classes").subscribe((response)=>{
     this.Classes=response
     //filter values
     this.Classes=this.Classes.filter(res=>{
      return res.t_name.match(this.tname)
    })
      
    })
    
  }
  streamclz(){
    this.router.navigate(['/t/str-cls']);
  }
}
