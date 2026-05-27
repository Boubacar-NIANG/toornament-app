import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  private apiUrl = 'http://localhost:8080/api/matches';

  constructor(private http: HttpClient) {}

  // Obtenir la liste des matchs
  getMatches(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Ajouter un nouveau match
  addMatch(match: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, match);
  }

  // Mettre à jour un match
  updateMatch(match: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${match.id}`, match);
  }

  // Supprimer un match
  deleteMatch(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
