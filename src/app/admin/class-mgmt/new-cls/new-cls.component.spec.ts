import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClsComponent } from './new-cls.component';

describe('NewClsComponent', () => {
  let component: NewClsComponent;
  let fixture: ComponentFixture<NewClsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewClsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewClsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
