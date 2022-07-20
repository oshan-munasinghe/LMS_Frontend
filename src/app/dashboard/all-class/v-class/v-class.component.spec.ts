import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VClassComponent } from './v-class.component';

describe('VClassComponent', () => {
  let component: VClassComponent;
  let fixture: ComponentFixture<VClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
