// pipes/filter-by-level.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { Trip } from '../models/trip.model';

@Pipe({
  name: 'filterByLevel',
  standalone: true
})
export class FilterByLevelPipe implements PipeTransform {
  transform(trips: Trip[], level: number): Trip[] {
    if (!trips) return [];
    return trips.filter(trip => trip.level === level);
  }
}