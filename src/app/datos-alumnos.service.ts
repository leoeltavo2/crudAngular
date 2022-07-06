import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosAlumnosService {
  constructor() { }

  alumnosData: any[] = [{
    nombre: "Alan",
    apellido: "Contreras del Río",
    correo: "alan1929@gmail.com",
    domicilio: "Avenida Cuatitlan, #444, Morelia,Mich.",
    telefono: "44232236"
  },
  {
    nombre: "María",
    apellido: "Alvarez Cuevas",
    correo: "Amac@gmail.com",
    domicilio: "Periférico central, #11, Querétaro,Qro.",
    telefono: "12832345"
  },
  {
    nombre: "Julio",
    apellido: "Carmona del Castillo",
    correo: "July@gmail.com",
    domicilio: "Emiliano Zapata st., #59, puebla,Pue.",
    telefono: "55533442"
  }]

  obtenerDatosAlumno() {
    return this.alumnosData
  }
}
