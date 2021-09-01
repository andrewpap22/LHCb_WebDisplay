import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GltfExporterComponent } from './gltf-exporter.component';

describe('GltfExporterComponent', () => {
  let component: GltfExporterComponent;
  let fixture: ComponentFixture<GltfExporterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GltfExporterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GltfExporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
