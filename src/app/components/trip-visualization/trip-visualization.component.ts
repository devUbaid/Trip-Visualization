// components/trip-visualization/trip-visualization.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripService } from '../../services/trip.service';
import { Trip } from '../../models/trip.model';
import { FilterByLevelPipe } from '../../pipes/filter-by-level.pipe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-trip-visualization',
  templateUrl: './trip-visualization.component.html',
  styleUrls: ['./trip-visualization.component.css'],
  standalone: true,
  imports: [CommonModule, FilterByLevelPipe]
})
export class TripVisualizationComponent implements OnInit, OnDestroy {
  trips: Trip[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private tripService: TripService) { }

  ngOnInit(): void {
    this.subscription = this.tripService.trips$.subscribe(trips => {
      this.trips = trips;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}