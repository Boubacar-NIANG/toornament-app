import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  private apiUrl = 'http://localhost:8080/api/tournaments'; 
  private userApiUrl = 'http://localhost:8080/api/utilisateurs'; 



  constructor(private http: HttpClient) {}

  // Récupérer tous les tournois
  getTournaments() {
    return this.http.get(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Récupérer un tournoi par ID
  getTournamentById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Créer un nouveau tournoi
  createTournament(tournament: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, tournament)
      .pipe(catchError(this.handleError));
  }

  // Mettre à jour un tournoi existant
  updateTournament(id: number, tournament: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, tournament)
      .pipe(catchError(this.handleError));
  }

  // Supprimer un tournoi
  deleteTournament(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }



  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
        errorMessage = `Error: ${error.error.message}`;
    } else {
        errorMessage = `Code d'erreur: ${error.status}\nMessage: ${error.message}`;
        console.error('Body error:', error.error);
    }
    console.error(errorMessage);
    return throwError(errorMessage);
}



  createUserWithRole(user: any): Observable<any> {
    // Utilise l'endpoint pour créer un utilisateur avec un rôle
    return this.http.post<any>(`${this.userApiUrl}`, user);
  }
}
