import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import {ConfirmationService, MenuItem, MessageService} from 'primeng/api';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [ConfirmationService,MessageService]
})
export class NavbarComponent implements OnInit {

  constructor(private confirmationService: ConfirmationService,private router:Router,private _toast:ToastrService) { }

  ngOnInit(): void {
  }
  logout(){
    this.router.navigate(['/']);
    sessionStorage.removeItem('Sid');
    this._toast.error("Logout");
   
  }
}
