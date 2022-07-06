import { Component, OnInit } from '@angular/core';
import { InfoProfesorService } from '../info-profesor.service';

@Component({
  selector: 'app-expediente-profesor',
  templateUrl: './expediente-profesor.component.html',
  styleUrls: ['./expediente-profesor.component.css']
})
export class ExpedienteProfesorComponent implements OnInit {

  profesor: any[] = [];
  constructor(public informacion: InfoProfesorService) { }

  ngOnInit(): void {
    this.profesor = this.informacion.obtenerProfesor();
  }

}
