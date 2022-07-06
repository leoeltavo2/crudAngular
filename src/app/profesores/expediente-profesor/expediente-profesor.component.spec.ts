import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpedienteProfesorComponent } from './expediente-profesor.component';

describe('ExpedienteProfesorComponent', () => {
  let component: ExpedienteProfesorComponent;
  let fixture: ComponentFixture<ExpedienteProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpedienteProfesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpedienteProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
