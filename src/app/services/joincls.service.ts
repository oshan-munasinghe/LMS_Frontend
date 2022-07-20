import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";

@Injectable({
    providedIn : 'root'
})

export class joinclsService{
    url='http://localhost:9000/exclasses/';
    constructor(private http:HttpClient){}

   addExClasses(fval:string){
        const _url=this.url+'add/';
        return this.http.post(_url,fval);
    }
    getExclass(): Observable<any>{
        return this.http.get(this.url);
    }
}