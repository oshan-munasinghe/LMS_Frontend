import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder,Validators} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';
import { SlideMenuModule } from 'primeng/slidemenu';


@Component({
  selector: 'app-t-nav',
  templateUrl: './t-nav.component.html',
  styleUrls: ['./t-nav.component.css']
})
export class TNavComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private router:Router,private titleservice:Title) { 
    this.titleservice.setTitle("LMS-Teacher");
  }
  items!: MenuItem[];
  ngOnInit(): void {
    this.items = [
      {
        label:'Users',
        icon:'pi pi-fw pi-user',
      },
      {
        separator:true
      },
      {
        label:'Events',
      icon:'pi pi-fw pi-calendar',
     },{separator:true},
     {
      label:'Logout',
      icon:'pi pi-fw pi-power-off',
      command: (event) => {
        this.router.navigate(['/t']);
     }
    }
    ];
  }
  logout(){
    
  }
}
