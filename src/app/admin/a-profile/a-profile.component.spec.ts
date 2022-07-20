import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AProfileComponent } from './a-profile.component';

describe('AProfileComponent', () => {
  let component: AProfileComponent;
  let fixture: ComponentFixture<AProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
