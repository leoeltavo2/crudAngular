import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoProfesorService {

  constructor() { }
  profesores: any[] = [
    {
      nombre: "Enrique Rufino",
      apellido: "Hidalgo",
      correo: "enrique.rh@gmail.com",
      control: "10899779",
      departamento: "Departamento de Sistemas",
      plaza: "Profesor de Base"
    },
    {
      nombre: "Alejandra",
      apellido: "Shoshone",
      correo: "Ale.sho@gmail.com",
      control: "10453452",
      departamento: "Departamento de Bioquimica",
      plaza: "Profesor Interino"
    },
    {
      nombre: "Gerardo",
      apellido: "Felix Servin",
      correo: "gerry.fs@gmail.com",
      control: "10093823",
      departamento: "Departamento de Mecánica",
      plaza: "profesor de honorarios"
    }
  ]

  obtenerProfesor() {
    return this.profesores
  }
}
