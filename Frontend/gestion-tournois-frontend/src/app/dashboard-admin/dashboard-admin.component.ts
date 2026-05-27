import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../tournament.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  tournaments: any[] = [];

  constructor(private tournamentService: TournamentService, private router: Router) {}

  ngOnInit(): void {
    this.loadTournaments();
  }

  loadTournaments() {
    this.tournamentService.getTournaments().subscribe(
      (response: any) => {
        this.tournaments = response;
      },
      error => {
        console.error('Erreur lors du chargement des tournois :', error);
      }
    );
  }



  editTournament(id: number) {
    this.router.navigate(['/edit-tournament', id]); 
  }

  deleteTournament(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce tournoi ?')) {
      this.tournamentService.deleteTournament(id).subscribe(
        () => {
          console.log('Tournoi supprimé avec succès');
          this.loadTournaments();
        },
        error => {
          console.error('Erreur lors de la suppression du tournoi :', error);
        }
      );
    }
  }

}
