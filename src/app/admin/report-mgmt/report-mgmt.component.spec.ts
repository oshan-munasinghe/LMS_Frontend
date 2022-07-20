import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportMgmtComponent } from './report-mgmt.component';

describe('ReportMgmtComponent', () => {
  let component: ReportMgmtComponent;
  let fixture: ComponentFixture<ReportMgmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportMgmtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
