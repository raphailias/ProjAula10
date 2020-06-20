import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  meuFavorito: boolean = false;
  cor: boolean = false;
  alunos = [];
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.meuFavorito = !this.meuFavorito;
  }
  mudarcor(){
    this.cor = !this.cor;
  }
  enviaform(aluno){
    this.alunos.push(aluno);
    console.log(this.alunos);
  }

}
