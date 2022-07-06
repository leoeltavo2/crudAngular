import { Component, OnInit } from '@angular/core';
import { HorarioService } from '../horario.service';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {

  horario: any[] = [];
  constructor(public informacion: HorarioService) { }

  ngOnInit(): void {
    this.horario = this.informacion.obtenerHorarioProfesor();
  }

}
