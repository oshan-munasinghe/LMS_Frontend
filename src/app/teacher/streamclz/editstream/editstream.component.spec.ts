import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditstreamComponent } from './editstream.component';

describe('EditstreamComponent', () => {
  let component: EditstreamComponent;
  let fixture: ComponentFixture<EditstreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditstreamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditstreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
