import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LHCbExperimentComponent } from './lhcb-experiment.component';

describe('LHCbExperimentComponent', () => {
  let component: LHCbExperimentComponent;
  let fixture: ComponentFixture<LHCbExperimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LHCbExperimentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LHCbExperimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
