import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetractComponent } from './retract.component';

describe('RetractComponent', () => {
  let component: RetractComponent;
  let fixture: ComponentFixture<RetractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
