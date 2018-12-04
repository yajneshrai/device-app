import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaugeModule } from 'angular-gauge';
import { UiSwitchModule } from 'ngx-toggle-switch';

import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MainContentComponent } from './layout/main-content/main-content.component';
import { ModeComponent } from './widgets/mode/mode.component';
import { ShadeComponent } from './widgets/shade/shade.component';
import { SliderComponent } from './widgets/slider/slider.component';
import { GaugeComponent } from './widgets/gauge/gauge.component';
import { DataService } from './services/data.service';


const routes: Routes = [
  { path: 'devices', redirectTo: '/devices/lamp', pathMatch: 'full' },
  { path: 'devices/:id', component: MainContentComponent },
  { path: '', redirectTo: '/devices/lamp', pathMatch: 'full' },
  { path: '**', redirectTo: '/devices/lamp', pathMatch: 'full' }
]
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainContentComponent,
    ModeComponent,
    ShadeComponent,
    SliderComponent,
    GaugeComponent, 
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routes),
    GaugeModule.forRoot(),
    UiSwitchModule
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
