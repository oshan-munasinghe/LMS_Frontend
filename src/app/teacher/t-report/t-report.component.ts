import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authenticService } from 'src/app/services/authentic.service';

@Component({
  selector: 'app-t-report',
  templateUrl: './t-report.component.html',
  styleUrls: ['./t-report.component.css']
})
export class TReportComponent implements OnInit {

  constructor($Auth:authenticService,private router:Router) { 
    $Auth.$_Authenticate('Tid','/t',router);//time-out
  }

  ngOnInit(): void {
  }

}
