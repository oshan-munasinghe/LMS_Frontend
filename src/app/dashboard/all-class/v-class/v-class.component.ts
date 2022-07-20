import { analyzeFile, identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { classesService } from 'src/app/services/classes.service';
import { AllClassComponent } from '../all-class.component';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { joinclsService } from 'src/app/services/joincls.service';
import { timer } from 'rxjs';


export interface classes {

  classCode: "",
  className: "",
  subject: "",
  grade: "",
  t_name: "",
  day: "",
  startTime: "",
  endtTime: "",
  fee: "",
  discription: ""

}
export interface join {
  s_name: "",
  s_regno: "",
  class_code: "",
  class_name: "",
  t_name: "",
  payment: "",
  join: ""
}


@Component({
  selector: 'app-v-class',
  templateUrl: './v-class.component.html',
  styleUrls: ['./v-class.component.css'],
  providers: [MessageService]

})

export class VClassComponent implements OnInit {
  show = true
//notes
urlw1="" ;w1dis=""
urlw2=""; w2dis=""
urlw3=""; w3dis=""
urlw4=""; w4dis=""
urlw5=""; w5dis=""
urlw6=""; w6dis=""
urlall="";walldis=""



  checked: boolean = true;
  Classes!: classes[];
  clzCode = ''
  clzName = ''
  Subject = ''
  Grade = ''
  tname = ''
  Day = ''
  STime = ''
  ETime = ''
  Fee = ''
  DIS = ''
  Stus = ''
  ckON = ''
  activeState: boolean[] = [true, false, false];
  blockedPanel!: boolean
  Qualification = ''
  experiance = ''
  pay!: boolean
  join!: boolean
  Sname = ''
  regNo = ''
  clzLink = ''


  constructor(private router: Router, private _clz: classesService,
    private Arouter: ActivatedRoute, private _http: HttpClient, private formBuilder: FormBuilder
    , private messageService: MessageService, private _joincls: joinclsService) {

    this.blockedPanel = true
    this.getStudent()
  }

  addDT!: FormGroup
  ngOnInit(): void {
    this.test()
    this.gotClasses();


  }
  back() {
    this.router.navigate(['/dashboard'])
  }
  gotClasses() {
    this._clz.getOneClasses(this.Arouter.snapshot.params['id']).subscribe((result) => {
      this.Classes = result;
      this.clzCode = result.classCode
      this.clzName = result.className
      this.Subject = result.subject
      this.Grade = result.grade
      this.tname = result.t_name
      this.Day = result.day
      this.STime = result.startTime
      this.ETime = result.endTime
      this.Fee = result.fee
      this.DIS = result.discription
      this.Stus = result.status

      const tn = result.t_name

      this.click()

    })
  }
  click() {
    var _Teacher = this.tname

    this._http.get<any>("http://localhost:9000/teacher/").subscribe(res => {
      const user = res.find((a: any) => {

        if (_Teacher == a.t_name) {
          this.Qualification = a.t_qulaification;
          this.experiance = a.t_experiance

        }

      })
    })
    this.addDT = this.formBuilder.group({
      s_name: [this.Sname],
      s_regno: [this.regNo],
      class_code: [this.clzCode],
      class_name: [this.clzName],
      t_name: [this.tname],
      payment: [this.pay],
      join: ["true"],

    })
   // console.log(this.addDT)
  }
  getStudent() {
    const sst = sessionStorage.getItem('Sid');
    this._http.get<any>("http://localhost:9000/student/").subscribe(res => {
      const user = res.find((a: any) => {
        if (sst == a._id) {
          this.Sname = a.name;
          this.regNo = a.regNo;
        }

      })
    })

  }
  validjoin() {
    var _clscode = this.clzCode;
    var _key;
    console.log(_clscode)
    this._http.get<any>("http://localhost:9000/exclasses/").subscribe(res => {
      const user = res.find((a: any) => {
        if (_clscode == a.class_code) {
          _key = a.class_code
        }
      })
    })
    return _key
  }
  addtojoin() {
    this.test();
    this.validjoin()
    this._joincls.addExClasses(this.addDT.value).subscribe(res => {
     // alert("joined to class")
     this.MSG("success","Sucsess","Sucessfully joined to Class");
    })



  }


  getjoinclassdata() {
    var _clscode = this.clzCode
    var _sname = this.Sname
    console.log(_clscode)
    this._http.get<any>("http://localhost:9000/exclasses/").subscribe(res => {
      const user = res.find((a: any) => {
        if (_clscode == a.class_code && _sname == a.s_name) {
          this.join = a.join
          this.pay = a.payment
        }
      })
    })
  }
  test() {
    const ota$ = timer(5, 1000);
    ota$.subscribe((d) => {
      //console.log(d);
      if (d == 1) {
        this.getjoinclassdata()
        this.getStream()
        //console.log(this.clzLink)
      }
    })

  }
  getStream() {
    var _clzcode = this.clzCode
    this._http.get<any>("http://localhost:9000/stream/").subscribe(res => {
      const user = res.find((a: any) => {
        if (_clzcode == a.clz_code) {
          this.clzLink = a.clz_link
          this.urlw1=a.noteLink1
          this.w1dis=a.n1dis
          this.urlw2=a.noteLink2
          this.w2dis=a.n2dis
          this.urlw3=a.noteLink3
          this.w3dis=a.n3dis
          this.urlw4=a.noteLink4
          this.w4dis=a.n4dis
          this.urlw5=a.noteLink5
          this.w5dis=a.n5dis
          this.urlall=a.noteLinkall
          this.walldis=a.nalldis
        }
      })
    })
  }
  week1(){ window.open(this.urlw1,'_blank')}
  week2(){ window.open(this.urlw2,'_blank')}
  week3(){ window.open(this.urlw3,'_blank')}
  week4(){ window.open(this.urlw4,'_blank')}
  week5(){ window.open(this.urlw5,'_blank')}
  allweek(){ window.open(this.urlall,'_blank')}
  zoom(){window.open(this.clzLink,'_blank')}

  MSG(type:string,title:string,msg: string){
    this.messageService.add({key: 'tc', 
    severity:type, 
    summary: title, 
    detail: msg});
  
  }

}

