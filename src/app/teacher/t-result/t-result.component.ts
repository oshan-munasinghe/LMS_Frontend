import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authenticService } from 'src/app/services/authentic.service';

@Component({
  selector: 'app-t-result',
  templateUrl: './t-result.component.html',
  styleUrls: ['./t-result.component.css']
})
export class TResultComponent implements OnInit {

  constructor($Auth:authenticService,private router:Router) {
    $Auth.$_Authenticate('Tid','/t',router);//time-out
   }

  ngOnInit(): void {
  }

}
