import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  cursos: string[] = ["Angular - Versão estável: 12.1.4 "];
  mostarCursos: boolean = false;

  constructor() { }

  ngOnInit(): void {
   
  }

  onMostrarCursos(){
    this.mostarCursos = !this.mostarCursos;
  }

}
