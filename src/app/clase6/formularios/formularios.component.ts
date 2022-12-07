import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css'],
})
export class FormulariosComponent implements OnInit {
  public formularioPrincipal: FormGroup;
  public formularioSegundario: FormGroup;

  constructor(private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.formularioPrincipal = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', Validators.required, Validators.minLength(3)],
      email: [
        '',
        [
          Validators.required,
          Validators.minLength(20),
          Validators.pattern(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
        ],
      ],
      password: ['', Validators.required, Validators.minLength(1)],
    });
    this.formularioSegundario;
  }

  submit() {
    console.log(this.formularioPrincipal.value);
  }
}
