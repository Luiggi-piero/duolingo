import { Component, Input } from '@angular/core';
import { AnswerQuestion, Question } from 'src/app/interfaces/Question';

@Component({
  selector: 'app-multiple-picture',
  templateUrl: './multiple-picture.component.html',
  styleUrls: ['./multiple-picture.component.scss']
})
export class MultiplePictureComponent {
  @Input() question!: Question;
  public answered = false;
  public answerSelected!: AnswerQuestion;
  public indexAnswer = 0;

  selectAnswer(answer: AnswerQuestion) {
    this.answered = true;
    this.answerSelected = answer;
  }
}
