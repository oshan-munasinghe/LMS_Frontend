import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { authenticService } from 'src/app/services/authentic.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})

export class TimetableComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    selectable: true,
     
  };
  options: any;
  events!: any[];

  constructor(private $Auth:authenticService,private router:Router) { 
    $Auth.$_Authenticate('Sid','/',router);//time-out
    this.toggleWeekends()
  }

  ngOnInit(): void {

    this.options = {
     
      headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: [
        { title: 'Science Class', date: '2022-07-20' ,time:'02.00'},
        { title: 'English Class', date: '2022-07-20' ,time:'06.00'},
        { title: 'Maths Class', date: '2022-07-22',time:'02.00pm' }
      ],
     
      editable: true,
      selectable:true,
      selectMirror: true,
      dayMaxEvents: true
};
  }

toggleWeekends() {
  this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
}

}
