import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar-alumno',
  templateUrl: './registrar-alumno.component.html',
  styleUrls: ['./registrar-alumno.component.css'],
})
export class RegistrarAlumnoComponent implements OnInit {
  @ViewChild('f') regForm: NgForm;

  // genero = ['Hombre', 'Mujer'];
  // name = "";
  // lastName = "";
  // email = "";
  // number = "";
  // career = "";
  // semester = "";
  // home = "";
  // phone = "";
  // gen = "";

  submitted = false;
  alumno = {
    name: '',
    lastName: '',
    email: '',
    number: '',
    career: '',
    semester: '',
    home: '',
    phone: '',
    gen: '',
  };

  myForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      apellido: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email]),
      numero: new FormControl(null, [
        Validators.required,
        Validators.maxLength(8),
      ]),
      carrera: new FormControl(null, Validators.required),
      semestre: new FormControl(null, Validators.required),
      domicilio: new FormControl(null, Validators.required),
      telefono: new FormControl(null, [
        Validators.required,
        Validators.maxLength(8),
      ]),
    });
  }

  onSubmit() {
    console.log(this.myForm);

    // console.log(this.regForm);

    this.submitted = true;
    this.alumno.name = this.regForm.value.nombreA;
    this.alumno.lastName = this.regForm.value.apellidoA;
    this.alumno.email = this.regForm.value.correoA;
    this.alumno.number = this.regForm.value.noControlA;
    this.alumno.career = this.regForm.value.carrera;
    this.alumno.semester = this.regForm.value.semestre;
    this.alumno.home = this.regForm.value.domicilioA;
    this.alumno.phone = this.regForm.value.telefonoA;
    this.alumno.gen = this.regForm.value.gen;
    this.regForm.reset();
  }
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
}
