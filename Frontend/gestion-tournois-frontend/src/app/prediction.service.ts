import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PredictionService {
  private apiUrl = 'http://localhost:8080/api/predictions';

  constructor(private http: HttpClient) {}

  savePrediction(prediction: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, prediction);
  }

  // méthode pour récupérer les pronostics existants
  getPredictions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
