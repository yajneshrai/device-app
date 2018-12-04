import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mode',
  templateUrl: './mode.component.html',
  styleUrls: ['./mode.component.css']
})
export class ModeComponent implements OnInit {
  @Input() mode: string;
  @Input() index: number;
  @Output() modeChanged = new EventEmitter();

  modes = [  
    { text: 'Morning', mode: 'morning', value: '50%', image: 'morning-wh.png'},
    { text: 'Day', mode: 'day', value: '30%', image: 'day-dk.png'},
    { text: 'Night', mode: 'night', value: '100%', image: 'night-dk.png'},
  ]

  constructor() { }
  
  ngOnInit() {
  }

  selectMode(selectedMode: string) {
    this.modeChanged.emit({index: this.index, mode: selectedMode});
  }
}
