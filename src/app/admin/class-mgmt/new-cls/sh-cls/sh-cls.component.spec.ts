import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShClsComponent } from './sh-cls.component';

describe('ShClsComponent', () => {
  let component: ShClsComponent;
  let fixture: ComponentFixture<ShClsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShClsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShClsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
