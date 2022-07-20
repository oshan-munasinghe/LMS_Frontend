import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { teacherService } from 'src/app/services/teacher.service';
import { streamService } from 'src/app/services/stream.service';
import {  MessageService } from 'primeng/api';
export interface stream{
  _id:"",
  t_name:"",
  clz_code:"",
  clz_name:"" ,
  clz_link:"" ,
  noteLink1:"" ,
  n1dis:"" ,
  noteLink2: "",
  n2dis: "",
  noteLink3: "",
  n3dis: "",
  noteLink4: "",
  n4dis: "",
  noteLink5: "",
  n5dis: "",
  noteLinkall: "",
  nalldis: ""

}
@Component({
  selector: 'app-editstream',
  templateUrl: './editstream.component.html',
  styleUrls: ['./editstream.component.css'],
  providers: [MessageService]
})
export class EditstreamComponent implements OnInit {
  url="http://localhost:9000";
  ID="";
  TNAME="";
  clznameli:any[]=[];clzName="";
  ClzCode="";ClzLink="";
  n1Link="";n1Dis="";
  n2Link="";n2Dis="";
  n3Link="";n3Dis="";
  n4Link="";n4Dis="";
  n5Link="";n5Dis="";
  nAllLink="";nAllDis="";

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
  Streams!: stream[];
  constructor(private _http: HttpClient,private _teacherService:teacherService,
    private router:Router,private formBuilder:FormBuilder,private StrService:streamService,
    private Arouter:ActivatedRoute,private messageService: MessageService) { 
      this.getStream();
    }
 addStream!:FormGroup
  ngOnInit(): void {
   
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
  
  
  getStream(){
    this.StrService.getOneStream(this.Arouter.snapshot.params['id']).subscribe((result)=>{
      console.log(result);
    this.Streams=result
    this.ID=result._id;
    this.TNAME=result.t_name;
    this.ClzCode=result.clz_code;
    this.clzName=result.clz_name;
    this.clz_link=result.clz_link;
    this.n1Link=result.noteLink1;
    this.n1Dis=result.n1dis;
    this.n2Link=result.noteLink2;
    this.n3Link=result.noteLink3
    this.n4Link=result.noteLink4
    this.n5Link=result.noteLink5
    this.nAllLink=result.noteLinkall
    this.n2Dis=result.n2dis;
    this.n3Dis=result.n3dis;
    this.n4Dis=result.n4dis;
    this.n5Dis=result.n5dis;
    this.nAllDis=result.nalldis;
    })
  }
 update(){
  var _tname=this.addStream.value.t_name;
  var _clzlink=this.addStream.value.clz_link;
  if(_tname==""){
    this.MSG("error","Error","Empty Teacher Name");
  }
  if(_clzlink==""){
    this.MSG("warn","warn","Class Link is empty");
  }
  if(_tname!=""|| _tname!=null){
    this.StrService.updateStream(this.Arouter.snapshot.params['id'],this.addStream.value)
    .subscribe(res=>{
      this.MSG("success","Sucsess","Updated Stream");
      
      console.log("Updated")
     
    })
  }
  else{

  }
 }
 MSG(type:string,title:string,msg: string){
  this.messageService.add({key: 'tc', 
  severity:type, 
  summary: title, 
  detail: msg});

}

}
