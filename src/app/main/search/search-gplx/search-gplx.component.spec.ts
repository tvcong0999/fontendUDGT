import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGplxComponent } from './search-gplx.component';

describe('SearchGplxComponent', () => {
  let component: SearchGplxComponent;
  let fixture: ComponentFixture<SearchGplxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchGplxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGplxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
