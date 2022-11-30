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
  public resultado: any;
  ngOnInit(): void {}

  apr = () => {
      this.resultado = this.lista.filter((e) => e.nota > 50);
/*       console.log(this.resultado + "resultado");
       console.log(this.lista + 'lista'); */
    return this.resultado;
  };
  repro = () => {
      this.resultado = this.lista.filter((e) => e.nota < 50);
      return this.resultado;
  };
  reset = () => {
    location.reload();
  };

 
  
}
