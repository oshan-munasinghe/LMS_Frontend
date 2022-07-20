import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { delay } from 'rxjs';
import { streamService } from 'src/app/services/stream.service';
export interface stream{
  _id:"",
  clz_code:"",
  t_name:"",
  clz_name:""
}
@Component({
  selector: 'app-shsclass',
  templateUrl: './shsclass.component.html',
  styleUrls: ['./shsclass.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class ShsclassComponent implements OnInit {
  url="http://localhost:9000"
  tname=""
  constructor(private _http: HttpClient,private router:Router,private messageService: MessageService,
    private StrService:streamService,private confirmationService: ConfirmationService) { }

  Stream!:stream[];
  ngOnInit(): void {
    this.getTname()
   // this.getStream()
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
  getStream(){
    delay(0.5)
    this._http.get<any>(this.url+"/stream").subscribe((response)=>{
    this.Stream=response
     //filter values
     console.log(response)
     this.Stream=this.Stream.filter(res=>{
       return res.t_name.match(this.tname)
     })
   
      
    })
    
  }
  delete(id: any){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to Delete Stream?',
      accept: () => {
          this.StrService.deleteStream(id).subscribe(data=>{
        this.MSG("info","DeLete","Deleted Data");
      
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
