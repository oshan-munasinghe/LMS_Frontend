import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authenticService } from 'src/app/services/authentic.service';

@Component({
  selector: 'app-payment-mgmt',
  templateUrl: './payment-mgmt.component.html',
  styleUrls: ['./payment-mgmt.component.css']
})
export class PaymentMgmtComponent implements OnInit {

  constructor($Auth:authenticService,private router:Router) {
    $Auth.$_Authenticate('Aid','/sys-admin',router);//time-out
   }

  ngOnInit(): void {
  }

}
