import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherMgmtComponent } from './teacher-mgmt.component';

describe('TeacherMgmtComponent', () => {
  let component: TeacherMgmtComponent;
  let fixture: ComponentFixture<TeacherMgmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherMgmtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
