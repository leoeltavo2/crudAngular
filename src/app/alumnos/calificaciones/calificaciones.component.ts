import { Component, OnInit } from '@angular/core';
import { CalificacionesAlumnoService } from 'src/app/calificaciones-alumno.service';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css']
})
export class CalificacionesComponent implements OnInit {

  calificaciones: any[] = []
  constructor(public informacion: CalificacionesAlumnoService) { }

  ngOnInit(): void {
    this.calificaciones = this.informacion.obtenerCali();
  }

}
