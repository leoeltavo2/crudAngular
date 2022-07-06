import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoAlumnosService {

  constructor() { }
  alumnos: any[] = [
    {
      nombre: "Alan",
      apellido: "Contreras del Río",
      correo: "alan1929@gmail.com",
      control: "19201234",
      carrera: "Ingeniería en Tecnologías de la Información y Comunicaciones",
      semestre: "5°"
    },
    {
      nombre: "María",
      apellido: "Alvarez Cuevas",
      correo: "Amac@gmail.com",
      control: "11226813",
      carrera: "Ingeniería en Sistemas Computacionales",
      semestre: "8°"
    },
    {
      nombre: "Julio",
      apellido: "Carmona del Castillo",
      correo: "July@gmail.com",
      control: "15207694",
      carrera: "Ingeniería Informática",
      semestre: "3°"
    }
  ]

  obtenerAlumno() {
    return this.alumnos
  }
}
