import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = '';
  lastNumber: number = 0;
  interval;

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
