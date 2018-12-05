import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { devices } from "../../data/devices";
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  currentDevice:any;
  deviceId: string;
  invalidDevice: boolean;
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.route.params.subscribe( (param: Params) => { 
      this.deviceId = this.route.snapshot.params['id'];
      this.currentDevice = this.dataService.getDevice(this.deviceId);
      this.invalidDevice = !this.currentDevice ? true : false;
    });
  }

  updateShade($event) { 
    this.dataService.updateShade($event.index, $event.shade);
  }

  updateStatus($event) { 
    this.dataService.updateStatus($event.index, $event.status);
  }

  updateMode($event) { 
    this.dataService.updateMode($event.index, $event.mode);
  }
}
