import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShsclassComponent } from './shsclass.component';

describe('ShsclassComponent', () => {
  let component: ShsclassComponent;
  let fixture: ComponentFixture<ShsclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShsclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShsclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
