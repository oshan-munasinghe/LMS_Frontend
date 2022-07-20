import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder,Validators} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {ConfirmationService, MenuItem, MessageService} from 'primeng/api';
import { SlideMenuModule } from 'primeng/slidemenu';



@Component({
  selector: 'app-nav-ad',
  templateUrl: './nav-ad.component.html',
  styleUrls: ['./nav-ad.component.css'],
  providers: [ConfirmationService,MessageService]
})
export class NavAdComponent implements OnInit {
 

  constructor(private formBuilder:FormBuilder,private confirmationService: ConfirmationService,private router:Router,private titleservice:Title) { 
    this.titleservice.setTitle("LMS-Admin");
  }
  items!: MenuItem[];
  ngOnInit(): void {
    
    this.items = [
      {
        label:'Profile',
        icon:'pi pi-fw pi-user',
        command: (event) => {
          this.profile();
       }
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
        this.logout();
     }
    }
    ];
  }
  logout(){
    this.router.navigate(['/sys-admin']);
        sessionStorage.removeItem('Aid');
    this.confirmationService.confirm({
      message: 'Are you sure that you want to Delete?',
      accept: () => {
        this.router.navigate(['/sys-admin']);
        sessionStorage.removeItem('Aid');

      }
  });

  }
  profile(){
    this.router.navigate(['/a/profile/:id']);
  }
}
