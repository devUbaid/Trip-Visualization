// services/trip.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Trip } from '../models/trip.model';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  private tripsSubject = new BehaviorSubject<Trip[]>([]);
  public trips$ = this.tripsSubject.asObservable();

  addTrip(trip: Trip): void {
    const currentTrips = this.tripsSubject.getValue();
    const newTrips = [...currentTrips, trip];
    this.updateTripLevels(newTrips);
    this.tripsSubject.next(newTrips);
  }

  clearTrips(): void {
    this.tripsSubject.next([]);
  }

  private updateTripLevels(trips: Trip[]): void {
    // Reset all trips to level 1 and not continued
    trips.forEach(trip => {
      trip.level = 1;
      trip.isContinued = false;
    });

    // Process trips to set continued status and level 2 for duplicates
    for (let i = 0; i < trips.length; i++) {
      // Check for continued trip
      if (i > 0 && trips[i-1].endPoint === trips[i].startPoint) {
        trips[i].isContinued = true;
      }

      // Check for consecutive duplicate trips (same start and end)
      if (i > 0 && 
          trips[i-1].startPoint === trips[i].startPoint && 
          trips[i-1].endPoint === trips[i].endPoint) {
        trips[i].level = 2;
        trips[i-1].level = 2;
      }
    }
  }
}