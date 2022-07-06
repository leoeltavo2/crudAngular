import { Component, OnInit } from '@angular/core';
import { DatosAlumnosService } from 'src/app/datos-alumnos.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {

  alumnosData: any[] = []
  constructor(public informacion: DatosAlumnosService) { }

  ngOnInit(): void {
    this.alumnosData = this.informacion.obtenerDatosAlumno();
  }


}
