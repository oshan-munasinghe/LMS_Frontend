import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { TimetableComponent } from './dashboard/timetable/timetable.component';
import { ClassComponent } from './dashboard/class/class.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorComponent } from './error/error.component';
import { StudentDComponent } from './student-d/student-d.component';
import { AdminComponent } from './admin/admin.component';
import { ADashboardComponent } from './admin/a-dashboard/a-dashboard.component';
import { PaymentMgmtComponent } from './admin/payment-mgmt/payment-mgmt.component';
import { StudentMgmtComponent } from './admin/student-mgmt/student-mgmt.component'; 
import { TeacherMgmtComponent } from './admin/teacher-mgmt/teacher-mgmt.component';
import { ResultComponent } from './result/result.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TDashboardComponent } from './teacher/t-dashboard/t-dashboard.component'; 
import { TExamComponent } from './teacher/t-exam/t-exam.component';
import { TReportComponent } from './teacher/t-report/t-report.component';
import { TResultComponent } from './teacher/t-result/t-result.component';
import { TClassComponent } from './teacher/t-class/t-class.component';
import { ReportMgmtComponent } from './admin/report-mgmt/report-mgmt.component';
import { ClassMgmtComponent } from './admin/class-mgmt/class-mgmt.component';
import { StdEditComponent } from './admin/student-mgmt/std-edit/std-edit.component';
import { TUpdateComponent } from './admin/teacher-mgmt/t-update/t-update.component';
import { VClassComponent } from './dashboard/all-class/v-class/v-class.component';
import { NewClsComponent } from './admin/class-mgmt/new-cls/new-cls.component';
import { EditClsComponent } from './admin/class-mgmt/new-cls/edit-cls/edit-cls.component';
import { EdmyclsComponent } from './teacher/t-class/edmycls/edmycls.component';
import { StreamclzComponent } from './teacher/streamclz/streamclz.component';
import { ShsclassComponent } from './teacher/streamclz/shsclass/shsclass.component';
import { EditstreamComponent } from './teacher/streamclz/editstream/editstream.component';
import { AProfileComponent } from './admin/a-profile/a-profile.component';
import { StdReportComponent } from './admin/report-mgmt/std-report/std-report.component';
import { ExamReportComponent } from './admin/report-mgmt/exam-report/exam-report.component';
import { PaymentReportComponent } from './admin/report-mgmt/payment-report/payment-report.component';
import { PaymentComponent } from './dashboard/payment/payment.component';

const routes: Routes = [
  
  {path:'',component:LoginComponent},
  {path: 'dashboard',component:DashboardComponent},
  {path: 'signup',component:SignupComponent},
  {path: 'timetable',component:TimetableComponent},
  {path: 'class',component:ClassComponent},
  {path:'nav',component:NavbarComponent },
  {path: 'error',component:ErrorComponent},
  {path:'stud_d',component:StudentDComponent},
  {path:'result',component: ResultComponent},
  {path:'class/:id',component: VClassComponent},
  {path:'payment/:id',component:PaymentComponent},
  // admin routes
  {path:'sys-admin',component:AdminComponent},
  {path:'a/dashboard',component:ADashboardComponent},
  {path:'a/payment',component:PaymentMgmtComponent},
  {path:'a/dashboard',component:ADashboardComponent},
  {path:'a/student-mgmt',component:StudentMgmtComponent},
  {path:'a/teacher-mgmt',component:TeacherMgmtComponent},
  {path:'a/class-mgmt',component:ClassMgmtComponent},
  {path:'a/report-mgmt',component:ReportMgmtComponent},
  {path:'a/editsd/:id',component:StdEditComponent},
  {path: 'a/t/update/:id',component:TUpdateComponent},
  {path:'a/newclass',component:NewClsComponent},
  {path:'a/class/edit/:id',component:EditClsComponent},
  {path:'a/profile/:id',component:AProfileComponent},
  {path:'#/report/std-report',component:StdReportComponent},
  {path:'#/report/exam-report',component:ExamReportComponent},
  {path:'#/report/payment-report',component:PaymentReportComponent},

  //twacher routes
  {path:'t',component:TeacherComponent},
  {path:'t/dashboard',component:TDashboardComponent},
  {path:'t/class',component:TClassComponent},
  {path:'t/exam',component:TExamComponent},
  {path:'t/result',component:TResultComponent},
  {path:'t/report',component:TReportComponent},
  {path:'t/ed-cls/:id',component:EdmyclsComponent},
  {path:'t/str-cls',component:StreamclzComponent},
  {path:'t/shsclass',component:ShsclassComponent},
  {path:'t/ed-stream/:id',component:EditstreamComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
