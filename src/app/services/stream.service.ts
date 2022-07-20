import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";

@Injectable({
    providedIn : 'root'
})
export class streamService{
    url='http://localhost:9000/stream/'
    constructor(private http:HttpClient){}

    getOneStream(id:any):Observable<any>{
        const f_url=this.url+'get/'+id;
        return this.http.get(f_url);
    }
    updateStream(ID:any,dt:string){
        const _url=this.url+'update/'+ID;
        return this.http.put(_url,dt);
    }
    deleteStream(ID:any){
        const _url=this.url+'delete/'+ID;
        return this.http.delete(_url);
    }
}
