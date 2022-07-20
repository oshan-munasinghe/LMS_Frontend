import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-h-about',
  templateUrl: './h-about.component.html',
  styleUrls: ['./h-about.component.css']
})
export class HAboutComponent implements OnInit {
  displayModal!: boolean;
  displayModal2!: boolean;
  displayModal3!: boolean;
  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
  showModalDialog() {
    this.displayModal = true;
  }
  showModalDialog2() {
    this.displayModal2 = true;
  }
  showModalDialog3() {
    this.displayModal3 = true;
  }
}
