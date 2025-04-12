import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripInputComponent } from './components/trip-input/trip-input.component';
import { TripVisualizationComponent } from './components/trip-visualization/trip-visualization.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, TripInputComponent, TripVisualizationComponent]
})
export class AppComponent {
  title = 'Transport Simple - Trip Visualization';
}