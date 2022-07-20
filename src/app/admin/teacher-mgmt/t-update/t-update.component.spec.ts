import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TUpdateComponent } from './t-update.component';

describe('TUpdateComponent', () => {
  let component: TUpdateComponent;
  let fixture: ComponentFixture<TUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
