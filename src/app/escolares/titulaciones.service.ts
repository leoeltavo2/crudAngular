import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitulacionesService {

  constructor() { }
  titulacion: any[] = [
    {
      nombre: "Hernan ",
      apellido: "Crespo Cardona",
      control: "12201234",
      carrera: "Ingeniería en Tecnologías de la Información y Comunicaciones",
      titulacion: "CENEVAL"
    },
    {
      nombre: "Lazaro ",
      apellido: "Díaz Covanova",
      control: "11224344",
      carrera: "Ingeniería en Sistemas Computacionales",
      titulacion: "DUAL"
    },
    {
      nombre: "María Mercedes ",
      apellido: "Castro Cárdenas",
      control: "13120912",
      carrera: "Ingeniería Informática",
      titulacion: "RESIDENCIAS PROFESIONALES"
    },
    {
      nombre: "Ines de la cruz ",
      apellido: "Tafolla",
      control: "11120948",
      carrera: "Ingeniería Informática",
      titulacion: "CENEVAL"
    }
  ]

  obtenerTitulaciones() {
    return this.titulacion
  }
}
