import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TProfileComponent } from './t-profile.component';

describe('TProfileComponent', () => {
  let component: TProfileComponent;
  let fixture: ComponentFixture<TProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
