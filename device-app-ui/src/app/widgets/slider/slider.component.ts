import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() status: boolean; 
  @Input() index: number;
  @Output() statusChanged = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  switchStatus($event)  {
    this.statusChanged.emit({index: this.index, status: $event});
  }
}
