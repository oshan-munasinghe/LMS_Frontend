import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";


@Injectable({
    providedIn : 'root'
})

export class authenticService{
    //function for seesion configure
    $_Authenticate(ssKey:any,path:any,router:any){
        var sst=sessionStorage.getItem(ssKey);
        //console.log(sst)
        if(sst==null){
            router.navigate([path]);
          }
    }
}