import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournaleditComponent } from './journaledit.component';

describe('JournaleditComponent', () => {
  let component: JournaleditComponent;
  let fixture: ComponentFixture<JournaleditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournaleditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JournaleditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
