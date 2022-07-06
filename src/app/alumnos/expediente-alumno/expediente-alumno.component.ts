import { Component, OnInit } from '@angular/core';
import { InfoAlumnosService } from 'src/app/info-alumnos.service';

@Component({
  selector: 'app-expediente-alumno',
  templateUrl: './expediente-alumno.component.html',
  styleUrls: ['./expediente-alumno.component.css']
})
export class ExpedienteAlumnoComponent implements OnInit {

  alumnos: any[] = []
  constructor(public informacion: InfoAlumnosService) { }

  ngOnInit(): void {
    this.alumnos = this.informacion.obtenerAlumno();
  }

}
