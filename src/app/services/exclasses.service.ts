import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";

@Injectable({
    providedIn : 'root'
})

export class exclazServices{
    url='http://localhost:9000/exclasses/'
    constructor(private http:HttpClient){}

    getOneExClz(id:any):Observable<any>{
        const f_url=this.url+'get/'+id;
        return this.http.get(f_url);
    }
    updateExclases(ID:any,dt:string){
        const _url=this.url+'update/'+ID;
        return this.http.put(_url,dt);
    }
}