import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-aluno',
  templateUrl: './card-aluno.component.html',
  styleUrls: ['./card-aluno.component.css']
})
export class CardAlunoComponent implements OnInit {
  @Input() aluno;
  constructor() { }

  ngOnInit(): void {
  }

}
