import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCoachComponent } from './crear-coach.component';

describe('CrearCoachComponent', () => {
  let component: CrearCoachComponent;
  let fixture: ComponentFixture<CrearCoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCoachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
