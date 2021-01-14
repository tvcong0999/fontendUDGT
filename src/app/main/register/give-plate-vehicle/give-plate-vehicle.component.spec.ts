import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GivePlateVehicleComponent } from './give-plate-vehicle.component';

describe('GivePlateVehicleComponent', () => {
  let component: GivePlateVehicleComponent;
  let fixture: ComponentFixture<GivePlateVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GivePlateVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GivePlateVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
