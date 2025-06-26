import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomList } from '../interface';
@Component({
  selector: 'app-rooms-list',
  imports: [CommonModule],
  templateUrl: './rooms-list.html',
  styleUrl: './rooms-list.scss'
})
export class RoomsList{
  @Input() rooms : RoomList[] = [];
  
}
