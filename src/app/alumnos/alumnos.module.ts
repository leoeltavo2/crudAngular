import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarAlumnoComponent } from './registrar-alumno/registrar-alumno.component';
import { ExpedienteAlumnoComponent } from './expediente-alumno/expediente-alumno.component';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { CalificacionesComponent } from './calificaciones/calificaciones.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [RegistrarAlumnoComponent, ExpedienteAlumnoComponent, DatosPersonalesComponent, CalificacionesComponent],
  imports: [
    CommonModule,
    // FormsModule
    ReactiveFormsModule
  ],
  exports: [
    RegistrarAlumnoComponent,
    ExpedienteAlumnoComponent,
    DatosPersonalesComponent,
    CalificacionesComponent
  ]
})
export class AlumnosModule { }
