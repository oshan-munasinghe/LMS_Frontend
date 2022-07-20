import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasInitComponent } from './clas-init.component';

describe('ClasInitComponent', () => {
  let component: ClasInitComponent;
  let fixture: ComponentFixture<ClasInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasInitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
