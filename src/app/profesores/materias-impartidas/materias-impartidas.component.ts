import { Component, OnInit } from '@angular/core';
import { MateriasImpartidasService } from '../materias-impartidas.service';

@Component({
  selector: 'app-materias-impartidas',
  templateUrl: './materias-impartidas.component.html',
  styleUrls: ['./materias-impartidas.component.css']
})
export class MateriasImpartidasComponent implements OnInit {

  profesorMat: any[] = [];
  constructor(public informacion: MateriasImpartidasService) { }

  ngOnInit(): void {
    this.profesorMat = this.informacion.obtenerMateriasProfesor();
  }

}
