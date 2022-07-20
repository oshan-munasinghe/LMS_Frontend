import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamclzComponent } from './streamclz.component';

describe('StreamclzComponent', () => {
  let component: StreamclzComponent;
  let fixture: ComponentFixture<StreamclzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamclzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamclzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
