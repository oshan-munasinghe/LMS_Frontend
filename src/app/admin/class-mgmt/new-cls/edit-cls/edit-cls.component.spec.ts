import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClsComponent } from './edit-cls.component';

describe('EditClsComponent', () => {
  let component: EditClsComponent;
  let fixture: ComponentFixture<EditClsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditClsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
