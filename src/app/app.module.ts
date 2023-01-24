import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { GameobjectComponent } from './gameobject/gameobject.component';
import { ScoreComponent } from './score/score.component';
import { StartComponent } from './start/start.component';
import { TopComponent } from './top/top.component';
import { StatusComponent } from './status/status.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    GameobjectComponent,
    ScoreComponent,
    StartComponent,
    TopComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
