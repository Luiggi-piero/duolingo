import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar-progress',
  templateUrl: './bar-progress.component.html',
  styleUrls: ['./bar-progress.component.scss']
})
export class BarProgressComponent {

  constructor(private router: Router) { }

  close() {
    this.router.navigate(['/home']);
  }
}
