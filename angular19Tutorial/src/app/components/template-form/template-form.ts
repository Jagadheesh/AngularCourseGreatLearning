import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css'
})
export class TemplateForm {
    userObj : any = {
      firstName : '',
      lastName : '',
      userName : '',
      city : '',
      state : '',
      zip : '',
      isAgree : '',
    }
    onSubmit() {
      const user = this.userObj;
      alert("Form Submitted")
      console.log(user);
    }

}
