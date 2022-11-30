import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  constructor() {}
  public lista = [
    {
      nombre: 'Pedro',
      nota: 100,
    },
    {
      nombre: 'Rafael',
      nota: 40,
    },
    {
      nombre: 'Marvelys',
      nota: 100,
    },
    {
      nombre: 'Juan',
      nota: 80,
    },
    {
      nombre: 'Jonh',
      nota: 30,
    },
    {
      nombre: 'Zack',
      nota: 75,
    },
  ];
  public resultado = [{}];
  ngOnInit(): void {}
 
  apr = () => {
    if (this.lista) {
         this.lista = this.lista.filter((e) => e.nota > 50);
    }else {
       location.reload();
    }
 return this.lista;
  };
  repro = () => {

        if (this.lista) {
          this.lista = this.lista.filter((e) => e.nota < 50);
          console.trace(this.lista);
          return this.lista;
        } else {
          location.reload();
        }
    return this.lista;
  };
  reset = () => {
    location.reload();
  };
}
