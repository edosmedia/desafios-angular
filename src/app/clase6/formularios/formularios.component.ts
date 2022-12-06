import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css'],
})
export class FormulariosComponent implements OnInit {
  public formularioPrincipal: FormGroup;
  public formularioSegundario: FormGroup;

  constructor(
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.formularioPrincipal = this.fb.group({
      nombre: ['Eduardo'],
      apellido: ['Medrano Piedra'],
      email: ['ejemplo@gmail.com'],
      password: ['123']
    });
    this.formularioSegundario;
  }

  submit() {
    console.log(this.formularioPrincipal.value);
  }
}
