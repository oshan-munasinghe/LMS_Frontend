import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";

@Injectable({
    providedIn : 'root'
})
export class studentService{
   
    url='http://localhost:9000/student/';
   
    constructor(private http:HttpClient){}
     
    getStudents(): Observable<any>{
        return this.http.get(this.url);
    }
    stStudent(): Observable<any>{
        
        const  sst=sessionStorage.getItem('Sid');
      
        const f_url=this.url+'get/'+sst;
        return this.http.get(f_url);
        
    }
     
    getonestudent(id: any):Observable<any>{
        const f_url=this.url+'get/'+id;
        return this.http.get(f_url);
    }
   deleteStudent(ID:any){
    const f_url=this.url+'delete/'+ID;
    return this.http.delete(f_url);
   }
}