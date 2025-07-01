import { first } from 'rxjs';
import {Component, signal } from '@angular/core';
import { ProgressBar } from '../reusable/progress-bar/progress-bar';
@Component({
  selector: 'app-signal',
  imports: [ProgressBar],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
  firstName = signal('John');
  lastName = signal<string>('Doe');

  userName = "Hello , World";
  rollNo = signal<number>(0);
  constructor() {
    setTimeout(() => {
      this.userName = "Angular"
    },5000);
  }
  // Signal is a reactive primitive in Angular that allows you to create reactive stat
  onIncrement() {
    this.rollNo.update(oldValue => oldValue+1);
  }
}
