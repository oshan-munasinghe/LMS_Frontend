import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HAboutComponent } from './h-about.component';

describe('HAboutComponent', () => {
  let component: HAboutComponent;
  let fixture: ComponentFixture<HAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
