import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { teacherService } from 'src/app/services/teacher.service';
export interface stream{
  _id:"",
  clz_code:"",
  t_name:"",
  clz_name:""
}
@Component({
  selector: 'app-streamclz',
  templateUrl: './streamclz.component.html',
  styleUrls: ['./streamclz.component.css'],
  providers: [MessageService]
})
export class StreamclzComponent implements OnInit {
  url="http://localhost:9000";
  TNAME="";
  clznameli:any[]=[];

  t_name=new FormControl();
  clz_code=new FormControl();
  clz_name= new FormControl();
  clz_link=new FormControl();
  noteLink1=new FormControl();
  n1dis=new FormControl();
  noteLink2=new FormControl();
  n2dis=new FormControl();
  noteLink3=new FormControl();
  n3dis=new FormControl();
  noteLink4=new FormControl();
  n4dis=new FormControl();
  noteLink5=new FormControl();
  n5dis=new FormControl();
  noteLinkall=new FormControl();
  nalldis=new FormControl();


  constructor(private _http: HttpClient,private _teacherService:teacherService,
    private router:Router,private formBuilder:FormBuilder,private messageService: MessageService) { 
    this.getTname()
    
  }
  addStream!:FormGroup
  ngOnInit(): void {
    this.getclzlist()
    this.addStream=this.formBuilder.group({
      t_name:[''],
      clz_code:[''],
      clz_name:[''],
      clz_link:[''],
      noteLink1:[''],
      n1dis:[''],
      noteLink2:[''],
      n2dis:[''],
      noteLink3:[''],
      n3dis:[''],
      noteLink4:[''],
      n4dis:[''],
      noteLink5:[''],
      n5dis:[''],
      noteLinkall:[''],
      nalldis:[''],
    })
  }
  getTname(){
    const sst = sessionStorage.getItem('Tid');
    if(sst!=null){
      this._teacherService.getoneteacher(sst).subscribe(std=>{
          this.TNAME=std.t_name
      })
    }
  }
  newStream(){
    this._http.post<any>(this.url+"/stream/add",this.addStream.value).subscribe(res=>{
      //alert("Sucessfull Create");
      this.MSG("success","Sucsess","CreatedStream");
      this.addStream.reset();
     
    },err =>{
      //alert("Failed Creation"+err);
      this.MSG("error","Error","Failed Creation"+err);
    })
  


  }
  getclzlist(){
    this._http.get<any>(this.url+"/classes/").subscribe(res=>{
      const user=res.find((a:any)=>{
       
       if(a.t_name==this.TNAME){
         this.clznameli.push(a.className)
       }

      })
  })
  }
  MSG(type:string,title:string,msg: string){
    this.messageService.add({key: 'tc', 
    severity:type, 
    summary: title, 
    detail: msg});
  
  }
}
