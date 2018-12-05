import { Injectable } from '@angular/core';
import { devices } from '../data/devices';

@Injectable()
export class DataService {
  constructor() { }
  
  getDevice(id:string) {
    return devices.filter(device => device.id == id)[0];
  }

  updateShade(index: number, shade: string) { 
    devices[index].shade = shade;
  }

  updateStatus(index: number, status: boolean) { 
    devices[index].on = status;
  }

  updateMode(index: number, mode: string) { 
    devices[index].mode = mode; 
  }
}
