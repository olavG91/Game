import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { GameobjectComponent } from './gameobject/gameobject.component';
import { ScoreComponent } from './score/score.component';
import { StartComponent } from './start/start.component';
import { TopComponent } from './top/top.component';
import { StatusComponent } from './status/status.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
 
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
    BrowserModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
