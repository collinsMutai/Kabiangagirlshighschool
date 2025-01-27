import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionMissionPageComponent } from './vision-mission-page.component';

describe('VisionMissionPageComponent', () => {
  let component: VisionMissionPageComponent;
  let fixture: ComponentFixture<VisionMissionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisionMissionPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisionMissionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
