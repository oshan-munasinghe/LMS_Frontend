import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authenticService } from 'src/app/services/authentic.service';

@Component({
  selector: 'app-t-exam',
  templateUrl: './t-exam.component.html',
  styleUrls: ['./t-exam.component.css']
})
export class TExamComponent implements OnInit {

  constructor($Auth:authenticService,private router:Router) { 
    $Auth.$_Authenticate('Tid','/t',router);//time-out
  }

  ngOnInit(): void {
  }

}
