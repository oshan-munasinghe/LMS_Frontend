import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TResultComponent } from './t-result.component';

describe('TResultComponent', () => {
  let component: TResultComponent;
  let fixture: ComponentFixture<TResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
