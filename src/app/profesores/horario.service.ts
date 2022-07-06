import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  constructor() { }

  horario: any[] = [
    {
      nombre: "Enrique Rufino",
      apellido: "Hidalgo",
      materia1: "Cálculo Integral",
      hmateria1: "09:00am A 10:00am",
      materia2: "Programación Web",
      hmateria2: "12:00pm A 13:00pm",
      materia3: "Programación II",
      hmateria3: "11:00am A 12:00pm"
    },
    {
      nombre: "Alejandra",
      apellido: "Shoshone",
      materia1: "Biología Molecular",
      hmateria1: "11:00am A 13:00pm",
      materia2: "Ciencias Sociales",
      hmateria2: "16:00pm A 17:00pm",
      materia3: "Matemáticas Discretas",
      hmateria3: "18:00pm A 19:00pm"
    },
    {
      nombre: "Gerardo",
      apellido: "Felix Servin",
      materia1: "Cálculo Diferencial",
      hmateria1: "07:00am A 08:00am",
      materia2: "Conceptos Básicos de Mécanica",
      hmateria2: "08:00am A 09:00am",
      materia3: "Matemáticas Discretas",
      hmateria3: "19:00pm A 20:00pm"
    }
  ]

  obtenerHorarioProfesor() {
    return this.horario
  }
}
