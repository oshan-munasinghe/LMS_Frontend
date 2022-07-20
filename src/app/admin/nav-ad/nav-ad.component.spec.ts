import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAdComponent } from './nav-ad.component';

describe('NavAdComponent', () => {
  let component: NavAdComponent;
  let fixture: ComponentFixture<NavAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
