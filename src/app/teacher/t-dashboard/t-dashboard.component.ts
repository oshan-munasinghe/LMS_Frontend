import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authenticService } from 'src/app/services/authentic.service';
import { MenuItem } from 'primeng/api';
import { FormGroup,FormBuilder,ReactiveFormsModule, FormControl ,Validators } from '@angular/forms';
import { HttpBackend, HttpClient, JsonpClientBackend } from '@angular/common/http';

import { delay, timer } from 'rxjs';
export interface classes{
  _id:"",
  classCode:"",
  className:"",
  t_name:"",
}
@Component({
  selector: 'app-t-dashboard',
  templateUrl: './t-dashboard.component.html',
  styleUrls: ['./t-dashboard.component.css']
})
export class TDashboardComponent implements OnInit {
  visibleSidebar2:any;
  visibleSidebar3:any;
  items!: MenuItem[] ;
  url="http://localhost:9000"
  tname=""
  clsName:any[]=[]
  clsCode:any[]=[]
  clsid:any[]=[]
  clz={}
  clzArray:any[]=[]
  i:any
  constructor($Auth:authenticService,private router:Router,private _http: HttpClient) { 
    $Auth.$_Authenticate('Tid','/t',router);//time-out
  }
  Classes!:classes[];
  ngOnInit(): void {
    this.getTname();
    this.items = [{
      label: 'Notifications',
      items: [{
          label: 'Welcome Admin Dashboard !',
          icon: 'pi pi-bell'
      },
      {
          label: 'New Student added ',
          icon: 'pi pi-user-plus'
         
      }
      ]},
      
  ];
  }
refresh(){

}
setting(){
  this.visibleSidebar3=true
}
display(){
  this.visibleSidebar2=true
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
  this.getClass();
}
getClass(){
delay(1)
this._http.get<any>(this.url+"/classes").subscribe((response)=>{
   this.Classes=response
   //filter values
   this.Classes=this.Classes.filter(res=>{
    return res.t_name.match(this.tname)
  })
    
  })
  
}
}
