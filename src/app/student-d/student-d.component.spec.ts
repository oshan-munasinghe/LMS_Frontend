import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDComponent } from './student-d.component';

describe('StudentDComponent', () => {
  let component: StudentDComponent;
  let fixture: ComponentFixture<StudentDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
