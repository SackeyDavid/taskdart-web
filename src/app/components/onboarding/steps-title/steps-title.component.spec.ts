import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsTitleComponent } from './steps-title.component';

describe('StepsTitleComponent', () => {
  let component: StepsTitleComponent;
  let fixture: ComponentFixture<StepsTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepsTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
