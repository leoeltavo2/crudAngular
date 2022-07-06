import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPersonalesProfesorComponent } from './datos-personales.component';

describe('DatosPersonalesComponent', () => {
  let component: DatosPersonalesProfesorComponent;
  let fixture: ComponentFixture<DatosPersonalesProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatosPersonalesProfesorComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosPersonalesProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
