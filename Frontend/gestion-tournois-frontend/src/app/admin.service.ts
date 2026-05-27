import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getTournaments(): Observable<any> {
    return this.http.get(`${this.apiUrl}/tournaments`);
  }

  createTournament(tournament: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/tournaments`, tournament);
  }

  deleteTournament(tournamentId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/tournaments/${tournamentId}`);
  }

  getMatches(): Observable<any> {
    return this.http.get(`${this.apiUrl}/matches`);
  }

  addMatch(match: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/matches`, match);
  }

  deleteMatch(matchId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/matches/${matchId}`);
  }

  getClassements(): Observable<any> {
    return this.http.get(`${this.apiUrl}/classements`);
  }
}
