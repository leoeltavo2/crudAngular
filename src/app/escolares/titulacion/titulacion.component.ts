import { Component, OnInit } from '@angular/core';
import { TitulacionesService } from '../titulaciones.service';

@Component({
  selector: 'app-titulacion',
  templateUrl: './titulacion.component.html',
  styleUrls: ['./titulacion.component.css']
})
export class TitulacionComponent implements OnInit {

  titulacion: any[] = [];
  constructor(public informacion: TitulacionesService) { }

  ngOnInit(): void {
    this.titulacion = this.informacion.obtenerTitulaciones();
  }

}
