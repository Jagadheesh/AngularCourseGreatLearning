import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-post-api',
  imports: [CommonModule],
  templateUrl: './post-api.html',
  styleUrl: './post-api.css'
})
export class PostApi {
  carList: any[] = [];
  constructor(private http: HttpClient) {
    // Initialization logic can go here

  }
  getAllCars() {
    this.http.get("http://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars").subscribe((result:any) => {
      this.carList = result.data;
    })
  }
}
