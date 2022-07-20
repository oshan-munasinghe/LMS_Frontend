import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authenticService } from 'src/app/services/authentic.service';

@Component({
  selector: 'app-seminar',
  templateUrl: './seminar.component.html',
  styleUrls: ['./seminar.component.css']
})
export class SeminarComponent implements OnInit {

  constructor(private router:Router,private $Auth:authenticService) {
    $Auth.$_Authenticate('Sid','/',router);//time-out
   }

  ngOnInit(): void {
  }

}
