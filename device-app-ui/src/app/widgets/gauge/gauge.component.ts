import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css'], encapsulation: ViewEncapsulation.None
})
export class GaugeComponent implements OnInit {
  @Input() intensity: any;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }
}
