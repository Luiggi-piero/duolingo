import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router, private _form: FormService) { }

  start() {
    this._form.resetForm();
    this.router.navigate(['/questions']);
  }
}
