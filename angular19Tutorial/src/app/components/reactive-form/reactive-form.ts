import { Component } from '@angular/core';
import {FormControl , FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Tabs } from '../reusable/tabs/tabs';
@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule,Tabs],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css'
})
export class ReactiveForm {
    userForm : FormGroup = new FormGroup({
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',[Validators.required,Validators.minLength(5)]),
      username: new FormControl(''),
      city : new FormControl(''),
      state : new FormControl(''),
      zip : new FormControl(''),
      isAgree : new FormControl(false)
    });
    Elements = ['Tab 1', 'Tab 2', 'Tab 3'];
    onUserSave() {
        console.log(this.userForm.value);
    }
}
