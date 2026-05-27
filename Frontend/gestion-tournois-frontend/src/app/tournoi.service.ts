import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TournoiService {
  private apiUrl = 'http://localhost:8080/api/tournaments';

  constructor(private http: HttpClient) {}

  // Obtenir la liste des tournois
  getTournois(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Obtenir un tournoi spécifique par ID
  getTournoiById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

}
