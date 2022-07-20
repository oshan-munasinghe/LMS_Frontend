import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamReportComponent } from './exam-report.component';

describe('ExamReportComponent', () => {
  let component: ExamReportComponent;
  let fixture: ComponentFixture<ExamReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
