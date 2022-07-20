import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authenticService } from 'src/app/services/authentic.service';
import {ChartModule} from 'primeng/chart';
import {SidebarModule} from 'primeng/sidebar';
import {BadgeModule} from 'primeng/badge';
import { MenuItem } from 'primeng/api';
import { studentService } from 'src/app/services/student.service';
export interface student{
 
  regNo:"",
  name:"",
  
}
@Component({
  selector: 'app-a-dashboard',
  templateUrl: './a-dashboard.component.html',
  styleUrls: ['./a-dashboard.component.css']
})

export class ADashboardComponent implements OnInit {
  data: any;
  visibleSidebar2:any;
  visibleSidebar3:any;
  items!: MenuItem[] ;
  multiAxisData: any;
  basicData:any;
  basicOptions: any;
  Student!:student[];
  constructor( private router:Router,private $Auth:authenticService,private _studentService:studentService) { 
    //this.authenticate();
    $Auth.$_Authenticate('Aid','/sys-admin',router);
   this.update();
   
  }

  ngOnInit(): void {
    
    this.stdShow();
    this.items = [{
      label: 'Notifications',
      items: [{
          label: 'Welcome Admin Dashboard !',
          icon: 'pi pi-bell'
      },
      {
          label: 'New Student added ',
          icon: 'pi pi-user-plus'
         
      }
      ]},
      
  ];
      
        // #######line graph#########
        this.basicData = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
              {
                  label: 'Student Count',
                  data: [35, 59, 90,45 , 56, 50, 70],
                  fill: false,
                  borderColor: '#2ECC71',
                  tension: .4
              },
              {
                  label: 'Teachers Count',
                  data: [10, 6, 12, 3, 1, 4, 8],
                  fill: false,
                  borderColor: '#6C3483',
                  tension: .4
              }
          ]
      };

  }
goStd(){
  this.router.navigate(['/a/student-mgmt'])
}
stdShow(){
  this._studentService.getStudents().subscribe(data=>
    {
      this.Student=data;
      //console.log(data);
      
    })
}
  update() {
    this.data =  {
      labels: ['Grade 6','Grade 7','Grade 8','Grade 9','Grade 10','Grade 11','A/Ls'],
      datasets: [
          {
              data: [20, 50, 20,35,40,51,30],
              backgroundColor: [
                  "#42A5F5",
                  "#66BB6A",
                  "#FFA726",
                  "#EC7063",
                  "#8E44AD",
                  "#D35400",
                  "#5D6D7E"
              ],
              hoverBackgroundColor: [
                  "#64B5F6",
                  "#81C784",
                  "#FFB74D",
                  "#EC7063",
                  "#8E449D",
                  "#D35400",
                  "#5D6D7A"
              ]
          }
      ]
  };

  }
//###########

display(event: Event){
  this.visibleSidebar2=true
  }
setting(){
  this.visibleSidebar3=true
  
}
refresh(): void {
  window.location.reload();
}
}
