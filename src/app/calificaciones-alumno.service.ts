import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalificacionesAlumnoService {

  constructor() { }
  calificaciones: any[] = [{
    nombre: "Alan",
    apellido: "Contreras del Río",
    control: "19201234",
    primer: "75",
    segundo: "80",
    tercero: "73",
    cuarto: "82",
    quinto: "90"
  },
  {
    nombre: "María",
    apellido: "Alvarez Cuevas",
    control: "11226813",
    primer: "80",
    segundo: "85",
    tercero: "95",
    cuarto: "82",
    quinto: "89",
    sexto: "84",
    septimo: "90",
    octavo: "90"
  },
  {
    nombre: "Julio",
    apellido: "Carmona del Castillo",
    control: "15207694",
    primer: "100",
    segundo: "100",
    tercero: "100"
  }]

  obtenerCali() {
    return this.calificaciones
  }
}
