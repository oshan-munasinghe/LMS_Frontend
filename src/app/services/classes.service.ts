import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";

@Injectable({
    providedIn : 'root'
})

export class classesService{
    url='http://localhost:9000/classes/';
    url2="http://localhost:9000/exclasses/";
    constructor(private http:HttpClient){}

    getClasses():Observable<any>{
        return this.http.get(this.url);
    }
    getOneClasses(ID:any):Observable<any>{
        const f_url=this.url+'get/'+ID;
        return this.http.get(f_url);
    }
    updateClass(ID:any,fi:string){
        const _url=this.url+'update/'+ID;
        return this.http.put(_url,fi);
    }
    //exClasses
    deleteEClasses(ID:any){
        const f_url=this.url2+'delete/'+ID;
        return this.http.delete(f_url);
    }
}