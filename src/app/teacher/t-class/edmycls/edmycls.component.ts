import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { classesService } from 'src/app/services/classes.service';

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
  discription:"",
  status:""
}
@Component({
  selector: 'app-edmycls',
  templateUrl: './edmycls.component.html',
  styleUrls: ['./edmycls.component.css'],
  providers: [MessageService]
})
export class EdmyclsComponent implements OnInit {

  stateOptions: any[];
  days :any[]=[];
  teacherLi:any[]=[]

  _id=new FormControl();
  classCode=new FormControl();
  className=new FormControl();
  subject=new FormControl();
  grade=new FormControl();
  //t_name=new FormControl();
  day=new FormControl();
  startTime=new FormControl();
  endTime=new FormControl();
  fee=new FormControl();
  discription=new FormControl();
  status=new FormControl();

  clzCode=""
  clzName=""
  Subject=""
  Grade=""
  Tname=""
  DAY=""
  Stime=""
  Etime=""
  Fees=""
  Dis=""
  Status=""

  constructor(private formBuilder:FormBuilder,
    private messageService: MessageService, 
    private Arouter:ActivatedRoute,private _CLS:classesService) { 
      this.days=['Monday','TuesDay','Wednesday','Thursday','Friday','Saturday','Sunday']
    this.stateOptions = [{label: 'Offline', value: 'offline'}, {label: 'Online', value: 'online'}];
    this.getClz()
    }
    classForm!:FormGroup
  ngOnInit(): void {
    this.classForm=this.formBuilder.group({
      classCode:[''] ,
      className:[''] ,
      subject:[''] ,
      grade:[''] ,
      //t_name:[''] ,
      day:[''] ,
      fee:[''] ,
      discription:[''] ,
      endTime:[''] ,
      startTime:[''] ,
     status:['']
    })
  }
  editClass(){
    this._CLS.updateClass(this.Arouter.snapshot.params['id'],this.classForm.value).
    subscribe(res=>{
      this.MSG("success","Sucsess","Updated Class")
     // alert("Updated")
    })
  }
  getClz(){
    this._CLS.getOneClasses(this.Arouter.snapshot.params['id']).subscribe((result)=>{
      this.clzName=result.className;
      this.clzCode=result.classCode;
      this.Subject=result.subject;
      this.Grade=result.grade;
      this.Tname=result.t_name;
      this.DAY=result.day;
      this.Stime=result.startTime;
      this.Etime=result.endTime;
      this.Fees=result.fee;
      this.Dis=result.discription;
      this.Status=result.status;
    })
  }
  MSG(type:string,title:string,msg: string){
    this.messageService.add({key: 'tc', 
    severity:type, 
    summary: title, 
    detail: msg});
  
  }
  clear(){
    this.classForm.reset()
  }
  
  
}
