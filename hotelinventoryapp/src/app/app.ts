import { Component } from '@angular/core';
import { Rooms } from "./rooms/rooms";
import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Rooms,CommonModule],
  // styles : [`
  //   h1{
  //     color: blue;
  //     font-family: sans-serif;
  //   }`]
})
export class App {
  protected title = 'hotelinventoryapp';
  role = "admin";
}
