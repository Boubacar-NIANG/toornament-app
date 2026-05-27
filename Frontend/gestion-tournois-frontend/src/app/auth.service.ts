import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/utilisateurs'; 

  constructor(private http: HttpClient, private router: Router) {}

  // Méthode pour l'inscription de l'utilisateur
  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  // Méthode pour la connexion de l'utilisateur
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  // Méthode pour vérifier si l'utilisateur est authentifié
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token'); 
  }

  // Méthode pour déconnecter l'utilisateur
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/connexion']);
  }
}
