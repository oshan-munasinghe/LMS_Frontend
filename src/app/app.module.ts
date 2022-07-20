import { NgModule } from '@angular/core';
import { BrowserModule , Title} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {TableModule} from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { SidebarModule } from "primeng/sidebar";


import { ToastrModule } from 'ngx-toastr';
import {MatCardModule} from '@angular/material/card';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { SignupComponent } from './signup/signup.component';
import {MatRippleModule} from '@angular/material/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TimetableComponent } from './dashboard/timetable/timetable.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ClassComponent } from './dashboard/class/class.component';
import { ErrorComponent } from './error/error.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import { StudentDComponent } from './student-d/student-d.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';
import { PassChangeComponent } from './student-d/pass-change/pass-change.component';

// -------------- prime ng ----------------
import {ToastModule} from 'primeng/toast';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {DialogModule} from 'primeng/dialog';
import {DataViewModule} from 'primeng/dataview';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {RippleModule} from 'primeng/ripple';
import {SlideMenuModule} from 'primeng/slidemenu';
import {MenuItem} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { TagModule } from 'primeng/tag';
import {ToolbarModule} from 'primeng/toolbar';
import {CalendarModule} from 'primeng/calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {SelectButtonModule} from 'primeng/selectbutton';
import {BadgeModule} from 'primeng/badge';
import {MenuModule} from 'primeng/menu';
import {PaginatorModule} from 'primeng/paginator';
import {FileUploadModule} from 'primeng/fileupload';

import { AdminComponent } from './admin/admin.component';
import { TeacherComponent } from './teacher/teacher.component';
import { NavAdComponent } from './admin/nav-ad/nav-ad.component';
import { StudentMgmtComponent } from './admin/student-mgmt/student-mgmt.component';
import { TeacherMgmtComponent } from './admin/teacher-mgmt/teacher-mgmt.component';
import { PaymentMgmtComponent } from './admin/payment-mgmt/payment-mgmt.component';
import { ADashboardComponent } from './admin/a-dashboard/a-dashboard.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { HAboutComponent } from './dashboard/h-about/h-about.component'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import { AllClassComponent } from './dashboard/all-class/all-class.component';
import {DropdownModule} from 'primeng/dropdown';
import {PanelModule} from 'primeng/panel';
import { SeminarComponent } from './dashboard/seminar/seminar.component';
import { ResultComponent } from './result/result.component';
import { TDashboardComponent } from './teacher/t-dashboard/t-dashboard.component';
import { TClassComponent } from './teacher/t-class/t-class.component';
import { TExamComponent } from './teacher/t-exam/t-exam.component';
import { TResultComponent } from './teacher/t-result/t-result.component';
import { TReportComponent } from './teacher/t-report/t-report.component';
import { TNavComponent } from './teacher/t-nav/t-nav.component';
import { ClassMgmtComponent } from './admin/class-mgmt/class-mgmt.component';
import { ReportMgmtComponent } from './admin/report-mgmt/report-mgmt.component';
import {SplitButtonModule} from 'primeng/splitbutton';
import {InputTextModule} from 'primeng/inputtext';
import { StdEditComponent } from './admin/student-mgmt/std-edit/std-edit.component';
import { NewStdComponent } from './admin/student-mgmt/new-std/new-std.component';
import Swal from 'sweetalert2';
import {InputNumberModule} from 'primeng/inputnumber';
import { TUpdateComponent } from './admin/teacher-mgmt/t-update/t-update.component';
import { TNewComponent } from './admin/teacher-mgmt/t-new/t-new.component';
import { VClassComponent } from './dashboard/all-class/v-class/v-class.component';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {DividerModule} from 'primeng/divider';
import {BlockUIModule} from 'primeng/blockui';
import {SplitterModule} from 'primeng/splitter';
import { NewClsComponent } from './admin/class-mgmt/new-cls/new-cls.component';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { ShClsComponent } from './admin/class-mgmt/new-cls/sh-cls/sh-cls.component';
import { EditClsComponent } from './admin/class-mgmt/new-cls/edit-cls/edit-cls.component';

import {TooltipModule} from 'primeng/tooltip';
import { MyClassComponent } from './dashboard/all-class/my-class/my-class.component';
import { ClasInitComponent } from './dashboard/all-class/clas-init/clas-init.component';
import { MyclsComponent } from './teacher/t-class/mycls/mycls.component';
import { EdmyclsComponent } from './teacher/t-class/edmycls/edmycls.component';
import { StreamclzComponent } from './teacher/streamclz/streamclz.component';
import { ShsclassComponent } from './teacher/streamclz/shsclass/shsclass.component';
import { EditstreamComponent } from './teacher/streamclz/editstream/editstream.component';
import { AProfileComponent } from './admin/a-profile/a-profile.component';
import { StdReportComponent } from './admin/report-mgmt/std-report/std-report.component';
import { ExamReportComponent } from './admin/report-mgmt/exam-report/exam-report.component';
import { PaymentReportComponent } from './admin/report-mgmt/payment-report/payment-report.component';
import { TProfileComponent } from './teacher/t-profile/t-profile.component';
import { FooterComponent } from './footer/footer.component';
import { PaymentComponent } from './dashboard/payment/payment.component';


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin
]);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    TimetableComponent,
    NavbarComponent,
    ClassComponent,
    ErrorComponent,
    StudentDComponent,
    PassChangeComponent,
    AdminComponent,
    TeacherComponent,
    NavAdComponent,
    StudentMgmtComponent,
    TeacherMgmtComponent,
    PaymentMgmtComponent,
    ADashboardComponent,
    HAboutComponent,
    AllClassComponent,
    SeminarComponent,
    ResultComponent,
    TDashboardComponent,
    TClassComponent,
    TExamComponent,
    TResultComponent,
    TReportComponent,
    TNavComponent,
    ClassMgmtComponent,
    ReportMgmtComponent,
    StdEditComponent,
    NewStdComponent,
    TUpdateComponent,
    TNewComponent,
    VClassComponent,
    NewClsComponent,
    ShClsComponent,
    EditClsComponent,
    MyClassComponent,
    ClasInitComponent,
    MyclsComponent,
    EdmyclsComponent,
    StreamclzComponent,
    ShsclassComponent,
    EditstreamComponent,
    AProfileComponent,
    StdReportComponent,
    ExamReportComponent,
    PaymentReportComponent,
    TProfileComponent,
    FooterComponent,
    PaymentComponent,
    
    
  ],
  imports: [
    
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatBottomSheetModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatRippleModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatDialogModule,
    MatGridListModule,SplitButtonModule,
    MatRadioModule,TableModule,
    ToastrModule.forRoot({
      timeOut:3000,preventDuplicates:true
    }),
    ToastModule,InputNumberModule,NgxMatTimepickerModule,
    CardModule,ButtonModule,DividerModule,BlockUIModule,
    TabViewModule,RippleModule,TagModule,ToggleButtonModule,
    SlideMenuModule,InputTextModule,ConfirmDialogModule,
    AccordionModule,DialogModule,AvatarGroupModule,AvatarModule,
    FullCalendarModule,DataViewModule,DropdownModule,PanelModule
    ,SplitterModule,ToolbarModule,CalendarModule,InputTextareaModule,
    SelectButtonModule,TooltipModule,ChartModule,SidebarModule,BadgeModule,
    PaginatorModule,MenuModule,FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
