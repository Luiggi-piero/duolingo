import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-correct-message',
  templateUrl: './correct-message.component.html',
  styleUrls: ['./correct-message.component.scss']
})
export class CorrectMessageComponent implements OnInit {
  // @Output() continue: EventEmitter<number> = new EventEmitter();
  // @Input() step!: number;
  constructor(private _form: FormService) { }
  
  ngOnInit(): void {}

  next() {
    this._form.showNextQuestion();
  }
}
