import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarProfesorComponent } from './registrar-profesor/registrar-profesor.component';
import { ExpedienteProfesorComponent } from './expediente-profesor/expediente-profesor.component';
import { DatosPersonalesProfesorComponent } from './datos-personales-profesor/datos-personales.component';
import { MateriasImpartidasComponent } from './materias-impartidas/materias-impartidas.component';
import { HorarioComponent } from './horario/horario.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [RegistrarProfesorComponent, ExpedienteProfesorComponent, DatosPersonalesProfesorComponent, MateriasImpartidasComponent, HorarioComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [RegistrarProfesorComponent, ExpedienteProfesorComponent, DatosPersonalesProfesorComponent, MateriasImpartidasComponent, HorarioComponent]
})
export class ProfesoresModule { }
