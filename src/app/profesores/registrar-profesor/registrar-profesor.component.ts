import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registrar-profesor',
  templateUrl: './registrar-profesor.component.html',
  styleUrls: ['./registrar-profesor.component.css'],
})
export class RegistrarProfesorComponent implements OnInit {
  @ViewChild('f') regForm: NgForm;

  genero = ['Hombre', 'Mujer'];
  name = '';
  lastName = '';
  email = '';
  number = '';
  depa = '';
  plaza = '';
  home = '';
  phone = '';
  gen = '';

  submitted = false;
  profesor = {
    name: '',
    lastName: '',
    email: '',
    number: '',
    depa: '',
    plaza: '',
    home: '',
    phone: '',
    gen: '',
  };

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    // console.log(this.regForm);

    this.submitted = true;
    this.profesor.name = this.regForm.value.nombreP;
    this.profesor.lastName = this.regForm.value.apellidoP;
    this.profesor.email = this.regForm.value.correoP;
    this.profesor.number = this.regForm.value.noControlP;
    this.profesor.depa = this.regForm.value.departamento;
    this.profesor.plaza = this.regForm.value.plaza;
    this.profesor.gen = this.regForm.value.gen;
    this.profesor.phone = this.regForm.value.telefonoP;
    this.profesor.home = this.regForm.value.domicilioP;
    this.regForm.reset();
  }
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
}
