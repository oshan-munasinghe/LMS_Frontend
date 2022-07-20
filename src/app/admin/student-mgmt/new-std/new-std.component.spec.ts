import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStdComponent } from './new-std.component';

describe('NewStdComponent', () => {
  let component: NewStdComponent;
  let fixture: ComponentFixture<NewStdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewStdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
