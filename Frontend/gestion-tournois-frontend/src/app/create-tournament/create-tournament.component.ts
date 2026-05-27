import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.css']
})
export class CreateTournamentComponent {
  // Définition des propriétés du tournoi
  tournament = {
    nom: '',
    categorie: '',
    date: null as Date | null,
  };

  // Définition des propriétés du Community Manager
  communityManager = {
    nom: '',
    prenom: '',
    email: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  createTournament() {
    // Créer le Community Manager
    this.http.post('http://localhost:8080/api/utilisateurs/create-with-role', {
      nom: this.communityManager.nom,
      prenom: this.communityManager.prenom,
      email: this.communityManager.email,
      password: this.communityManager.password,
      role: 'CommunityManager'
    }).subscribe(
      (communityManagerResponse: any) => {
        console.log('Community Manager créé:', communityManagerResponse);

        // Créer le tournoi après la création réussie du Community Manager
        this.http.post('http://localhost:8080/api/tournaments', {
          nom: this.tournament.nom,
          categorie: this.tournament.categorie,
          date: this.tournament.date,
          communityManagerId: communityManagerResponse.id
        }).subscribe(
          (tournamentResponse) => {
            console.log('Tournoi créé:', tournamentResponse);
            this.router.navigate(['/dashboard-admin']);
          },
          (tournamentError: HttpErrorResponse) => {
            console.error('Erreur lors de la création du tournoi:', tournamentError);
            alert('Erreur lors de la création du tournoi. Veuillez réessayer.');
          }
        );
      },
      (communityManagerError: HttpErrorResponse) => {
        console.error('Erreur lors de la création du Community Manager:', communityManagerError);
        alert('Erreur lors de la création du Community Manager. Veuillez réessayer.');
      }
    );
  }
}
