import { Component } from '@angular/core';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-incorrect-message',
  templateUrl: './incorrect-message.component.html',
  styleUrls: ['./incorrect-message.component.scss']
})
export class IncorrectMessageComponent {
  constructor(private _form: FormService) { }

  next() {
    this._form.showNextQuestion();
  }

  get correctAnswer() {
    return this._form.correctAnswer;
  }
}
