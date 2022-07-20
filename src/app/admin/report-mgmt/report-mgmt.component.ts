import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authenticService } from 'src/app/services/authentic.service';

@Component({
  selector: 'app-report-mgmt',
  templateUrl: './report-mgmt.component.html',
  styleUrls: ['./report-mgmt.component.css']
})
export class ReportMgmtComponent implements OnInit {

  constructor(private $Auth:authenticService, private router:Router) { 
    $Auth.$_Authenticate('Aid','/sys-admin',router);//time-out
  }

  ngOnInit(): void {
    
  }
  stdR(){
    this.router.navigate(['/#/report/std-report']);
  }
  examR(){
    this.router.navigate(['/#/report/exam-report']);
  }
  paymentR(){
    this.router.navigate(['/#/report/payment-report']);
  }
}

