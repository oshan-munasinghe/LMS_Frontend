import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authenticService } from '../services/authentic.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private $Auth:authenticService,private router:Router) { 
    $Auth.$_Authenticate('Sid','/',router);//time-out
  }

  ngOnInit(): void {
  }

}
