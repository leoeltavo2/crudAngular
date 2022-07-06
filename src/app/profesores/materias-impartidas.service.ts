import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MateriasImpartidasService {


  constructor() { }

  profesorMat: any[] = [{
    nombre: "Enrique Rufino",
    apellido: "Hidalgo",
    materia1: "Cálculo Integral",
    materia2: "Programación Web",
    materia3: "Programación II"
  },
  {
    nombre: "Alejandra",
    apellido: "Shoshone",
    materia1: "Biología Molecular",
    materia2: "Ciencias Sociales",
    materia3: "Matemáticas Discretas"
  },
  {
    nombre: "Gerardo",
    apellido: "Felix Servin",
    materia1: "Cálculo Diferencial",
    materia2: "Conceptos Básicos de Mécanica",
    materia3: "Matemáticas Discretas"
  }]


  obtenerMateriasProfesor() {
    return this.profesorMat
  }
}
