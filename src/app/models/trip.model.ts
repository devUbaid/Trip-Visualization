// models/trip.model.ts
export class Trip {
    id: string;
    startPoint: string;
    endPoint: string;
    level: number;
    isContinued: boolean;
  
    constructor(startPoint: string, endPoint: string) {
      this.id = Math.random().toString(36).substring(2);
      this.startPoint = startPoint.toUpperCase().substring(0, 3);
      this.endPoint = endPoint.toUpperCase().substring(0, 3);
      this.level = 1;
      this.isContinued = false;
    }
  }