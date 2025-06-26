import { Component } from '@angular/core';
import { Room, RoomList } from './interface';
import { CommonModule } from '@angular/common';
import { RoomsList } from "./rooms-list/rooms-list";

@Component({
  standalone: true,
  selector: 'app-rooms',
  imports: [CommonModule, RoomsList],
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
  roomList : RoomList[]  = [
    {
      RoomNumber: 101,
      RoomType: 'Deluxe',
      photo: 'deluxe.jpg',
      isBooked: false,
      PricePerMonth: 2000,
      InCheckTime: new Date('2023-10-01T14:00:00'),
      Rating: 4.5
    },
    {
      RoomNumber: 102,
      RoomType: 'Suite',
      photo: 'suite.jpg',
      isBooked: true,
      PricePerMonth: 3000,
      InCheckTime: new Date('2024-10-02T14:00:00'),
      Rating: 3.876
    },
    {
      RoomNumber: 103,
      RoomType: 'Standard',
      photo: 'standard.jpg',
      isBooked: false,
      PricePerMonth: 1500,
      InCheckTime: new Date('2025-05-25T14:00:00'),
      Rating : 3.890
    }
  ]
  toggle() {
    this.isVisible = !this.isVisible;
  }
}
