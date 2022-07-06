import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasImpartidasComponent } from './materias-impartidas.component';

describe('MateriasImpartidasComponent', () => {
  let component: MateriasImpartidasComponent;
  let fixture: ComponentFixture<MateriasImpartidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriasImpartidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriasImpartidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
