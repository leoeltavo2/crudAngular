import { Component, OnInit } from '@angular/core';
import { DatosProfesoresService } from '../datos-profesores.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesProfesorComponent implements OnInit {

  profesorData: any[] = [];
  constructor(public informacion: DatosProfesoresService) { }

  ngOnInit(): void {
    this.profesorData = this.informacion.obtenerDatosProfesor();
  }

}
