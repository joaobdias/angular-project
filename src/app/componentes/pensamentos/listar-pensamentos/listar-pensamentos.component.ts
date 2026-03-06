import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css'],
})
export class ListarPensamentosComponent implements OnInit {
  listaPensamentos = [
    // {
    //   conteudo: 'Comunicao entre componentes',
    //   autoria: 'Juan',
    //   modelo: 'modelo3',
    // },
    // {
    //   conteudo: 'Comunicao entre componentes 2',
    //   autoria: 'Jorge',
    //   modelo: 'modelo2',
    // },
  ];

  constructor() {}

  ngOnInit(): void {}
}
