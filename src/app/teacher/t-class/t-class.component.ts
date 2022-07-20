import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authenticService } from 'src/app/services/authentic.service';

@Component({
  selector: 'app-t-class',
  templateUrl: './t-class.component.html',
  styleUrls: ['./t-class.component.css']
})
export class TClassComponent implements OnInit {
  url="http://localhost:9000"
  tname=""
  subject=""
  constructor($Auth:authenticService,private router:Router,private _http: HttpClient) { 
    $Auth.$_Authenticate('Tid','/t',router);//time-out
    this.getTname()
  }

  ngOnInit(): void {
  }
  getTname(){
    const sst = sessionStorage.getItem('Tid');
    this._http.get<any>(this.url+"/teacher/").subscribe(res => {
      const user = res.find((a: any) => {
        if(sst==a._id){
          this.tname=a.t_name
          this.subject=a.subject
          //console.log(this.tname)
        }

      })
    })
  }
}
