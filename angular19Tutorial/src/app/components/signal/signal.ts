import {Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
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
  onIncrement() {
    this.rollNo.update(oldValue => oldValue+1);
  }
}
