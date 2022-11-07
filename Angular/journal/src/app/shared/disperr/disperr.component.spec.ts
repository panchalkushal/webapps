import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisperrComponent } from './disperr.component';

describe('DisperrComponent', () => {
  let component: DisperrComponent;
  let fixture: ComponentFixture<DisperrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisperrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisperrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
