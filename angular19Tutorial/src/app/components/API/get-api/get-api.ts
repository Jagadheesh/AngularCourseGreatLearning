import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-api',
  imports: [CommonModule],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css'
})
export class GetApi {

  userList: any [] = [];
  constructor(private http: HttpClient) {
    // Initialization logic can go here

  }
  getUsers() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any) => {
      this.userList = result;
    })
  }
}
