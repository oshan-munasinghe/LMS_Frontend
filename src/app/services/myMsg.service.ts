import { Component, Injectable } from "@angular/core";
import { MessageService } from 'primeng/api';
import { ToastrService } from 'ngx-toastr';

@Component({
   
    providers: [MessageService]
  })

@Injectable({
    providedIn : 'root'
})
export class myMsgService{
    constructor(private messageService:MessageService){

    }
_MSG(type:string,title:string ,msg: string){
    this.messageService.add({key: 'tc', 
    severity:type, 
    summary: title, 
    detail: msg});
    }
}