import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shade',
  templateUrl: './shade.component.html',
  styleUrls: ['./shade.component.css']
})
export class ShadeComponent implements OnInit {
  @Input() shade: string;
  @Input() index: number;
  @Output() shadeChanged = new EventEmitter();

  shades = ['#FF4563', '#8245E6', '#4AC0E0', '#1089EB', '#C791CD'];
  constructor() { }

  ngOnInit() {
  }
  
  selectShade(selectedShade: string) {
    this.shadeChanged.emit({index: this.index, shade: selectedShade});
  }
}
