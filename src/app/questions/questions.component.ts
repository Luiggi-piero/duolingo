import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormService } from '../services/form.service';
import { AnswerQuestion, Question } from '../interfaces/Question';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit, OnDestroy {

  public step = 0;
  public question!: Question;
  public questions: Question[] = [];
  public formSubscription!: Subscription
  public stepSubscription!: Subscription

  constructor(private _form: FormService) { }

  ngOnInit(): void {
    this.formSubscription = this._form.getForm('questions').subscribe({
      next: (res) => {
        this.questions = res;
        this.question = this.questions[this.step];
        this._form.setCorrectAnswer(this.getCorrectAnswer());
      },
      error: (e) => { console.log(e) }
    });

    this.stepSubscription = this._form.stepObservable.subscribe({
      next: (newStep) => {
        this.step = newStep;
        this.question = this.questions[this.step];
        this._form.setCorrectAnswer(this.getCorrectAnswer());
      }
    })
  }

  getCorrectAnswer(): AnswerQuestion {
    return this.question?.answers.filter(answer => answer.isCorrect)[0];
  }

  ngOnDestroy(): void {
    this.formSubscription.unsubscribe();
    this.stepSubscription.unsubscribe();
  }
}
