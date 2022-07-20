import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TClassComponent } from './t-class.component';

describe('TClassComponent', () => {
  let component: TClassComponent;
  let fixture: ComponentFixture<TClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
