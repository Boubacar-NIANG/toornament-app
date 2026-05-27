import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {
  team = {
    nom: '',
    categorie: '',
    tournoi: null as any,  
    tournoiId: null as number | null  
  };

  tournois: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    // Charger tous les tournois existants
    this.http.get('http://localhost:8080/api/tournaments').subscribe(
      (response: any) => {
        this.tournois = response;
        console.log('Tournois chargés:', this.tournois); 
      },
      (error: HttpErrorResponse) => {
        console.error('Erreur lors du chargement des tournois:', error);
      }
    );
  }
  
  createTeam() {
    if (!this.team.nom || !this.team.categorie || !this.team.tournoiId) {
      alert('Tous les champs sont obligatoires.');
      return;
    }
  
    // Préparez l'objet de l'équipe avec l'ID du tournoi
    const newTeam = {
      nom: this.team.nom,
      categorie: this.team.categorie,
      tournoi: { id: this.team.tournoiId } 
    };
  
    this.http.post('http://localhost:8080/api/teams', newTeam, {
      headers: { 'Content-Type': 'application/json' }
    }).subscribe(
      (response) => {
        console.log('Équipe créée:', response);
        this.router.navigate(['/admin/teams']);
      },
      (error: HttpErrorResponse) => {
        console.error('Erreur lors de la création de l\'équipe:', error);
        alert('Erreur lors de la création de l\'équipe. Veuillez réessayer.');
      }
    );
  }
  
  
  
}
