import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AlumnosModule } from './alumnos/alumnos.module';
import { RegistrarAlumnoComponent } from './alumnos/registrar-alumno/registrar-alumno.component';
import { ExpedienteAlumnoComponent } from './alumnos/expediente-alumno/expediente-alumno.component';
import { DatosPersonalesComponent } from './alumnos/datos-personales/datos-personales.component';
import { CalificacionesComponent } from './alumnos/calificaciones/calificaciones.component';

import { ProfesoresModule } from './profesores/profesores.module';
import { RegistrarProfesorComponent } from './profesores/registrar-profesor/registrar-profesor.component';
import { ExpedienteProfesorComponent } from './profesores/expediente-profesor/expediente-profesor.component';
import { DatosPersonalesProfesorComponent } from './profesores/datos-personales-profesor/datos-personales.component';
import { MateriasImpartidasComponent } from './profesores/materias-impartidas/materias-impartidas.component';
import { HorarioComponent } from './profesores/horario/horario.component';

import { EscolaresModule } from './escolares/escolares.module';
import { ConstanciasComponent } from './escolares/constancias/constancias.component';
import { TitulacionComponent } from './escolares/titulacion/titulacion.component';

//
const appRoutes: Routes = [
  //alumno
  { path: 'registrarA', component: RegistrarAlumnoComponent },
  { path: 'expedienteA', component: ExpedienteAlumnoComponent },
  { path: 'datosA', component: DatosPersonalesComponent },
  { path: 'calificacionA', component: CalificacionesComponent },
  //profesor
  { path: 'registrarP', component: RegistrarProfesorComponent },
  { path: 'expedienteP', component: ExpedienteProfesorComponent },
  { path: 'datosP', component: DatosPersonalesProfesorComponent },
  { path: 'materias', component: MateriasImpartidasComponent },
  { path: 'horario', component: HorarioComponent },
  //escolares
  { path: 'constancia', component: ConstanciasComponent },
  { path: 'titulacion', component: TitulacionComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlumnosModule,
    ProfesoresModule,
    EscolaresModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' })
  ],
  // exports: [DatosPersonalesComponent, CalificacionesComponent],
  providers: [],
  bootstrap: [AppComponent, RegistrarAlumnoComponent, ExpedienteAlumnoComponent, DatosPersonalesComponent, CalificacionesComponent,
    RegistrarProfesorComponent, ExpedienteProfesorComponent, DatosPersonalesProfesorComponent, MateriasImpartidasComponent, HorarioComponent,
    ConstanciasComponent, TitulacionComponent]
})
export class AppModule { }
