import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authenticService } from 'src/app/services/authentic.service';

@Component({
  selector: 'app-class-mgmt',
  templateUrl: './class-mgmt.component.html',
  styleUrls: ['./class-mgmt.component.css']
})
export class ClassMgmtComponent implements OnInit {

  constructor(private router:Router,private $Auth:authenticService) { 
    $Auth.$_Authenticate('Aid','/sys-admin',router);
  }

  ngOnInit(): void {
  }
newBtn(){
  this.router.navigate(['a/newclass'])
}
}
