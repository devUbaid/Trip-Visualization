import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TripService } from '../../services/trip.service';
import { Trip } from '../../models/trip.model';

@Component({
  selector: 'app-trip-input',
  templateUrl: './trip-input.component.html',
  styleUrls: ['./trip-input.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class TripInputComponent {
  startPoint: string = '';
  endPoint: string = '';

  constructor(private tripService: TripService) { }

  addTrip(): void {
    if (this.startPoint && this.endPoint) {
      const newTrip = new Trip(this.startPoint, this.endPoint);
      this.tripService.addTrip(newTrip);
      this.startPoint = '';
      this.endPoint = '';
    }
  }

  clearTrips(): void {
    this.tripService.clearTrips();
  }
}