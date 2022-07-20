import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMgmtComponent } from './payment-mgmt.component';

describe('PaymentMgmtComponent', () => {
  let component: PaymentMgmtComponent;
  let fixture: ComponentFixture<PaymentMgmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentMgmtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
