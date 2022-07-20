import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APassChangeComponent } from './a-pass-change.component';

describe('APassChangeComponent', () => {
  let component: APassChangeComponent;
  let fixture: ComponentFixture<APassChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APassChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(APassChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
