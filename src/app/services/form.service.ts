import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AnswerQuestion, Question } from '../interfaces/Question';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  stepSubject = new BehaviorSubject<number>(0);
  stepObservable: Observable<number> = this.stepSubject.asObservable();
  correctAnswer!: AnswerQuestion;

  constructor(private _http: HttpClient) { }

  public getForm(name: string): Observable<Question[]> {
    return this._http.get<Question[]>(`assets/forms/${name}.json`)
  }

  showNextQuestion() {
    let nextQuestionNumber = this.stepSubject.value;
    nextQuestionNumber += 1;
    this.stepSubject.next(nextQuestionNumber);
  }

  resetForm() {
    this.stepSubject.next(0);
  }

  setCorrectAnswer(answer: AnswerQuestion) {
    this.correctAnswer = answer;
  }
}
