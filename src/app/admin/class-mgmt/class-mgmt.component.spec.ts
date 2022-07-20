import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassMgmtComponent } from './class-mgmt.component';

describe('ClassMgmtComponent', () => {
  let component: ClassMgmtComponent;
  let fixture: ComponentFixture<ClassMgmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassMgmtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
