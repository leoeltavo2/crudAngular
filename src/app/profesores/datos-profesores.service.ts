import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosProfesoresService {

  constructor() { }

  profesorData: any[] = [{
    nombre: "Enrique Rufino",
    apellido: "Hidalgo",
    correo: "enrique.rh@gmail.com",
    domicilio: "Virrey de Revillagigedo #100, P.O. Box: 76175, Querétaro,Qro.",
    telefono: "2427379"
  },
  {
    nombre: "Alejandra",
    apellido: "Shoshone",
    correo: "Ale.sho@gmail.com",
    domicilio: "VIA METEPEC 284 S/N, RESIDENCIAL AMERICAS, 52140. Estado de México",
    telefono: "4455343"
  },
  {
    nombre: "Gerardo",
    apellido: "Felix Servin",
    correo: "gerry.fs@gmail.com",
    domicilio: "AV DR GUSTAVO BAZ NO. 6, XOCOYAHUALCO, 54080. Estado de México",
    telefono: "44254080"
  }]


  obtenerDatosProfesor() {
    return this.profesorData
  }

}
