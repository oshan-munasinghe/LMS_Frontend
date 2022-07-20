import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdEditComponent } from './std-edit.component';

describe('StdEditComponent', () => {
  let component: StdEditComponent;
  let fixture: ComponentFixture<StdEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
