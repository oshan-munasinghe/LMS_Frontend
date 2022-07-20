import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { teacherService } from 'src/app/services/teacher.service';



interface City {
  name: string,
  day: string
}

@Component({
  selector: 'app-new-cls',
  templateUrl: './new-cls.component.html',
  styleUrls: ['./new-cls.component.css'],
  providers: [MessageService]
})
export class NewClsComponent implements OnInit {
  days :any[]=[];
  classCode= new FormControl();
  className= new FormControl();
  subject= new FormControl();
  grade= new FormControl();
  t_name= new FormControl();
  day= new FormControl();
  fee= new FormControl();
  discription= new FormControl();
  endTime= new FormControl();
  startTime= new FormControl();
  
  teacherLi:any[]=[]
  
  
  constructor(private TED:teacherService, private messageService: MessageService, private formBuilder:FormBuilder,private _http:HttpClient,private router:Router) {
    this.days=['Monday','TuesDay','Wednesday','Thursday','Friday','Saturday','Sunday']
    //this.teacherLi=['test','test1']
   
    this.getTname()
   }
   classForm!:FormGroup
  ngOnInit(): void {
    
    this.classForm=this.formBuilder.group({
      classCode:[''] ,
      className:[''] ,
      subject:[''] ,
      grade:[''] ,
      t_name:[''] ,
      day:[''] ,
      fee:[''] ,
      discription:[''] ,
      endTime:[''] ,
      startTime:[''] ,

    })
  
  
  }
  newClass(){
    this._http.post<any>("http://localhost:9000/classes/add",this.classForm.value).subscribe(res=>{
      //alert("adding Sucessfull");
      this.MSG("success","Sucsess","Added")
      this.classForm.reset();
      this.router.navigate(['/a/newclass']);
    },err =>{
      //alert("Failed opp"+err);
      this.MSG("error","Error","faild Operation"+err)
    })
  }

  getTname(){
    this._http.get<any>("http://localhost:9000/teacher/").subscribe(res=>{
      const user=res.find((a:any)=>{
       
       this.teacherLi.push(a.t_name)

      })
  })
 //console.log(this.teacherLi)
}
MSG(type:string,title:string,msg: string){
  this.messageService.add({key: 'tc', 
  severity:type, 
  summary: title, 
  detail: msg});

}
}
