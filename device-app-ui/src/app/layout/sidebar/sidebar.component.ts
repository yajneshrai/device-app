import { Component, OnInit } from '@angular/core';
import { devices } from "../../data/devices";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  devices = devices;

  ngOnInit() {
  }

}
