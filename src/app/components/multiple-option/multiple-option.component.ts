import { Component, Input } from '@angular/core';
import { AnswerQuestion, Question } from 'src/app/interfaces/Question';

@Component({
  selector: 'app-multiple-option',
  templateUrl: './multiple-option.component.html',
  styleUrls: ['./multiple-option.component.scss']
})
export class MultipleOptionComponent {
  @Input() question!: Question;
  public answered = false;
  public answerSelected!: AnswerQuestion;

  selectAnswer(answer: AnswerQuestion): void {
    this.answered = true;
    this.answerSelected = answer;
  }
}
