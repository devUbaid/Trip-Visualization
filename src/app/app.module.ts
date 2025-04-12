import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TripInputComponent } from './components/trip-input/trip-input.component';
import { TripVisualizationComponent } from './components/trip-visualization/trip-visualization.component';
import { FilterByLevelPipe } from '../app/pipes/filter-by-level.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TripInputComponent,
    TripVisualizationComponent,
    FilterByLevelPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
