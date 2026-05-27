import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EquipeService {
  private apiUrl = 'http://localhost:8080/api/teams'; 
  constructor(private http: HttpClient) {}

  // Obtenir la liste des équipes
  getEquipes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Obtenir une équipe spécifique par ID
  getEquipeById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }


}
