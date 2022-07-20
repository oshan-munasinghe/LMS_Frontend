import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdmyclsComponent } from './edmycls.component';

describe('EdmyclsComponent', () => {
  let component: EdmyclsComponent;
  let fixture: ComponentFixture<EdmyclsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdmyclsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdmyclsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
