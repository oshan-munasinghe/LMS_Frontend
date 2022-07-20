import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";

@Injectable({
    providedIn : 'root'
})


export class teacherService{
    url='http://localhost:9000/teacher/';

    constructor(private http:HttpClient){}

    getTeachers(): Observable<any>{
        return this.http.get(this.url);
    }
    getoneteacher(id: any):Observable<any>{
        const f_url=this.url+'get/'+id;
        return this.http.get(f_url);
    }
    deleteTeacher(ID:any){
        const _url=this.url+'delete/'+ID;
        return this.http.delete(_url);
    }
    updateTeacher(ID:any,fi:string){
        const _url=this.url+'update/'+ID;
        return this.http.put(_url,fi);
    }
    addTeacher(fval:string){
        const _url=this.url+'add/';
        return this.http.post(_url,fval);
    }
}