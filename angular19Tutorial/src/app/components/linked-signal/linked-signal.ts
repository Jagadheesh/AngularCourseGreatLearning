import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.html',
  styleUrl: './linked-signal.css'
})
export class LinkedSignal {
    firstName = signal<string>("John");
    lastName = signal<string>("Doe");

    fullName = linkedSignal({
      source: this.firstName,
      computation : (newOption,old)=> {
          const fullName = newOption+" "+this.lastName();
          return fullName;
      }
})
    onClick() {
      this.firstName.set("Rahul");
    }
    
}
