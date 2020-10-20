import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularCesiumModule, AngularCesiumWidgetsModule} from 'angular-cesium';

import { AppComponent } from './app.component';
import {CesiumComponent} from './cesium/cesium.component';
import {RocketComponent} from './rocket/rocket.component';
import {PolylineComponent} from './polyline/polyline.component';
import {RouterModule} from '@angular/router';
import {TrackEntityLayerComponent} from './track-entity-layer/track-entity-layer.component';

@NgModule({
  declarations: [
    AppComponent,
    CesiumComponent,
    PolylineComponent,
    TrackEntityLayerComponent,
    RocketComponent
  ],
  imports: [
    BrowserModule,
    AngularCesiumModule.forRoot(),
    AngularCesiumWidgetsModule,
    RouterModule.forRoot( [
      { path: 'cesium', component: CesiumComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
