import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnGPLXComponent } from './learn-gplx.component';

describe('LearnGPLXComponent', () => {
  let component: LearnGPLXComponent;
  let fixture: ComponentFixture<LearnGPLXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnGPLXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnGPLXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
