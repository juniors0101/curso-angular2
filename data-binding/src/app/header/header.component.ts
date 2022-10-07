import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nomeDoCurso: string = 'ESTOU FAZENDO MEU PRIMEIRO CURSO DE ANGULAR JS, E TESTANDO VARIAS COISAS';

  valorInicial = 15;

  valor: number = 5;

  deletarCiclo: boolean = false;

  mudarValor(){
    this.valor++;
  }

  destruirCiclo(){
    this.deletarCiclo = true;
  }

  onMudouValor(evento: any){
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
