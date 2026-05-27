import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  latitude: number = 0; 
  longitude: number = 0; 
  mapUrl: string = ''; 

  constructor() { }

  ngOnInit(): void {
    this.getUserLocation();
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.updateMapUrl();
        },
        (error) => {
          console.error('Erreur de géolocalisation:', error);
          this.useDefaultLocation();
        }
      );
    } else {
      console.error('La géolocalisation n\'est pas supportée par ce navigateur.');
      this.useDefaultLocation();
    }
  }

  updateMapUrl() {
    this.mapUrl = `https://www.google.com/maps/embed/v1/view?key=AIzaSyDC2wWagFPRT6baQ78SMG69jX8ZjWSsTSE&center=${this.latitude},${this.longitude}&zoom=14`;
  }

  useDefaultLocation() {
    // Remplacez par des coordonnées par défaut
    this.latitude = 52.3676; 
    this.longitude = 4.9041;
    this.updateMapUrl();
  }
}
