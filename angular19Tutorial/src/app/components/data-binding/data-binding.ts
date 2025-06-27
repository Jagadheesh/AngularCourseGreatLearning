import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {
    firstName: string = 'John';
    age : number = 30;
    isActive: boolean = true;
    newDivClass : string = 'bg-primary';
    onClickMessage() {
      alert("Welcome to Angular 19 Tutorial");
    }
    onChangeMessage() {
      console.log("Option Changed");
    }

    selectedOption: string = "";
    constructor(private router:Router) {
      console.log(this.firstName , this.age, this.isActive);
      // this.onClickMessage();

     
    }
     navigateToAdmin() {
        this.router.navigateByUrl('/admin')
      }
}
