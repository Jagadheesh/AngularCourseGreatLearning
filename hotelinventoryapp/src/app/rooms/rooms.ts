import { Component } from '@angular/core';
import { Room, RoomList } from './interface';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-rooms',
  imports: [CommonModule],
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss'
})
export class Rooms {

  isVisible = false;
  hotelName = 'Hotel California';
  NoOfRooms = 100;

  rooms : Room = {
    TotalRooms: 100,
    AvailableRooms: 10,
    PricePerMonth: 1500
  }

  roomList : RoomList[] = [
    {
      RoomNumber: 101,
      RoomType: 'Deluxe',
      photo: 'deluxe.jpg',
      isBooked: false,
      PricePerMonth: 2000
    },
    {
      RoomNumber: 102,
      RoomType: 'Suite',
      photo: 'suite.jpg',
      isBooked: true,
      PricePerMonth: 3000
    },
    {
      RoomNumber: 103,
      RoomType: 'Standard',
      photo: 'standard.jpg',
      isBooked: false,
      PricePerMonth: 1500
    }
  ]
  toggle() {
    this.isVisible = !this.isVisible;
  }
}
