import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAlunoComponent } from './card-aluno.component';

describe('CardAlunoComponent', () => {
  let component: CardAlunoComponent;
  let fixture: ComponentFixture<CardAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
