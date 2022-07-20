import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TReportComponent } from './t-report.component';

describe('TReportComponent', () => {
  let component: TReportComponent;
  let fixture: ComponentFixture<TReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
