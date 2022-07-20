import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyclsComponent } from './mycls.component';

describe('MyclsComponent', () => {
  let component: MyclsComponent;
  let fixture: ComponentFixture<MyclsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyclsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyclsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
