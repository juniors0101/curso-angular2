import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com.br/400/200/nature';
  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  

  getValor(){
    return 1;
  }

  getCurtiCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão Clicado!');
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }


  

  constructor() { }

  ngOnInit(): void {
  }

}
