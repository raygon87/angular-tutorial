import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = '';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBaWWIAloz-k7sLtXdFQtt_MEkLhv7T9Bs",
    authDomain: "ng-recipe-book-e2881.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
