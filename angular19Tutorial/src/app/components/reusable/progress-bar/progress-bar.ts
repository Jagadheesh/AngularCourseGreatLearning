import { Component, Input, Output } from '@angular/core';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-progress-bar',
  imports: [NgStyle],
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.css'
})
export class ProgressBar {
  @Input() progress : number = 0;

  @Output() getProgress() {
    return this.progress;
  }
}
