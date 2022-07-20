import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { exclazServices } from 'src/app/services/exclasses.service';
export interface exclases{
  _id:"",
  s_name:"",
  s_regno:"",
  class_code:"",
  class_name:"",
  t_name:"",
  payment:"",
}
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  providers: [ConfirmationService,MessageService]
})
export class PaymentComponent implements OnInit {
months:any[]=[];
uploadedFiles: any[] = [];
ID=""
Sname=""
Sreg=""
ClzCode=""
ClzName=""
TNAME=""
PAY!:boolean
t_name=new FormControl();
payment= new FormControl();
Exclases!:exclases
bdisabled=false
  constructor(private payService:exclazServices,
    private Arouter:ActivatedRoute,private messageService: MessageService,private formBuilder:FormBuilder,
    private router:Router) {
      this.getStream()
     }
addExclases!:FormGroup
  ngOnInit(): void {
    if(this.PAY!=true){
      this.bdisabled=false
    }
    this.months=['January','February','March','April','May','June']
      
    this.addExclases=this.formBuilder.group({
      
      payment:["true"],
    })
  }
getStream(){//one
  this.payService.getOneExClz(this.Arouter.snapshot.params['id']).subscribe((result)=>{
    console.log(result);
    this.Exclases = result;
    this.TNAME=result.t_name;
    this.ClzCode=result.class_code;
    this.PAY=result.payment;
    this.Sname=result.s_name;
    this.ClzName=result.class_name;
  })
}

MSG(type:string,title:string,msg: string){
  this.messageService.add({key: 'tc', 
  severity:type, 
  summary: title, 
  detail: msg});

}
onUpload(event: { files: any; }) {
  for(let file of event.files) {
      //this.uploadedFiles.push(file);
  }

  this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}
//this.MSG("warn","Pending","Payment Processing");
pay(){
  if(this.PAY!=true){
    this.payService.updateExclases(this.Arouter.snapshot.params['id'],this.addExclases.value)
      .subscribe(res=>{
    this.MSG("warn","Pending","Payment Processing");
  })
  }
  this.MSG("info","Payment","Already paied for this class");
}
check(){
  if(this.PAY==true){
    this.bdisabled=true
  }
}
back(){
  this.router.navigate(['/class']);
}
}
