import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  constructor(private router: Router) {}

  // Sample statistics data
  stats = [
    { value: '50k+', label: 'Routes Visualized' },
    { value: '99.9%', label: 'Accuracy' },
    { value: '24/7', label: 'Support' }
  ];

  // Sample features data
  features = [
    { icon: '🌐', title: 'Real-time Visualization', description: 'Interactive map of transport routes with live updates' },
    { icon: '📊', title: 'Multi-level Routing', description: 'Display primary and secondary routes with intelligent grouping' },
    { icon: '📱', title: 'Responsive Design', description: 'Works seamlessly across desktop, tablet, and mobile' }
  ];

  navigateToApp() {
    this.router.navigate(['/app']);
  }
}