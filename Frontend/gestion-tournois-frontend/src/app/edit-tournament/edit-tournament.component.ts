import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-tournament',
  templateUrl: './edit-tournament.component.html',
  styleUrls: ['./edit-tournament.component.css']
})
export class EditTournamentComponent implements OnInit {
  tournamentId: number | null = null;
  tournament = {
    nom: '',
    categorie: '',
    date: null as Date | null
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    // Obtenir l'ID du tournoi à partir des paramètres de l'URL
    this.tournamentId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.tournamentId) {
      // Récupérer les détails du tournoi
      this.http.get(`http://localhost:8080/api/tournaments/${this.tournamentId}`)
        .subscribe(
          (response: any) => {
            this.tournament = response;
          },
          (error: HttpErrorResponse) => {
            console.error('Erreur lors de la récupération des détails du tournoi:', error);
          }
        );
    }
  }

  updateTournament() {
    if (this.tournamentId) {
      console.log('Données de tournoi envoyées:', this.tournament); // Log pour vérifier les données avant l'envoi
  
      // Envoyer la requête de mise à jour au backend
      this.http.put(`http://localhost:8080/api/tournaments/${this.tournamentId}`, this.tournament)
        .subscribe(
          (response) => {
            console.log('Tournoi mis à jour:', response);
            this.router.navigate(['/dashboard-admin']); // Rediriger vers le dashboard après mise à jour
          },
          (error: HttpErrorResponse) => {
            console.error('Erreur lors de la mise à jour du tournoi:', error);
            alert('Erreur lors de la mise à jour du tournoi. Veuillez réessayer.');
          }
        );
    }
  }
  
  
}
