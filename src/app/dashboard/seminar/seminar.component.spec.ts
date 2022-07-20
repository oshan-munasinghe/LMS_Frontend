import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminarComponent } from './seminar.component';

describe('SeminarComponent', () => {
  let component: SeminarComponent;
  let fixture: ComponentFixture<SeminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeminarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
