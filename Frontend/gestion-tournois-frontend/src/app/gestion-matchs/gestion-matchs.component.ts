import { Component, OnInit } from '@angular/core';
import { MatchService } from '../match.service'; // Assurez-vous que le chemin du service est correct
import { EquipeService } from '../equipe.service'; // Pour récupérer les équipes
import { TournoiService } from '../tournoi.service'; // Pour récupérer les tournois

@Component({
  selector: 'app-gestion-matchs',
  templateUrl: './gestion-matchs.component.html',
  styleUrls: ['./gestion-matchs.component.css']
})
export class GestionMatchsComponent implements OnInit {
  equipes: any[] = []; // Contiendra la liste des équipes
  tournois: any[] = []; // Contiendra la liste des tournois
  matches: any[] = []; // Contiendra la liste des matchs
  matchToEdit: any = null; // Utilisé pour ajouter/modifier un match
  isEditMode = false; // Détermine si nous sommes en mode modification ou ajout

  constructor(
    private matchService: MatchService,
    private equipeService: EquipeService,
    private tournoiService: TournoiService
  ) {}

  ngOnInit() {
    this.loadEquipes();
    this.loadTournois();
    this.loadMatches();
  }

  // Charger la liste des équipes
  loadEquipes() {
    this.equipeService.getEquipes().subscribe((equipes) => {
      this.equipes = equipes;
    }, error => {
      console.error('Erreur lors du chargement des équipes:', error);
    });
  }

  // Charger la liste des tournois
  loadTournois() {
    this.tournoiService.getTournois().subscribe((tournois) => {
      this.tournois = tournois;
    }, error => {
      console.error('Erreur lors du chargement des tournois:', error);
    });
  }

  // Charger la liste des matchs
  loadMatches() {
    this.matchService.getMatches().subscribe((matches) => {
      this.matches = matches;
    }, error => {
      console.error('Erreur lors du chargement des matchs:', error);
    });
  }

  // Commencer à ajouter un nouveau match
  startNewMatch() {
    this.isEditMode = false;
    this.matchToEdit = {
      equipeA: null,
      equipeB: null,
      date: '',
      scoreA: 0,
      scoreB: 0,
      tournoi: null,
      statut: 'En attente',
    };
  }

  // Modifier un match existant
  editMatch(match: any) {
    this.isEditMode = true;
    this.matchToEdit = { ...match }; // Copier les détails du match à éditer
  }

  // Sauvegarder le match (ajouter ou modifier)
  saveMatch() {
    if (this.isEditMode) {
      this.matchService.updateMatch(this.matchToEdit).subscribe(
        () => {
          this.loadMatches();
          this.matchToEdit = null; // Réinitialiser le formulaire
        },
        (error) => {
          console.error('Erreur lors de la mise à jour du match:', error);
        }
      );
    } else {
      this.matchService.addMatch(this.matchToEdit).subscribe(
        () => {
          this.loadMatches();
          this.matchToEdit = null; // Réinitialiser le formulaire
        },
        (error) => {
          console.error('Erreur lors de la création du match:', error);
        }
      );
    }
  }

  // Annuler l'édition ou la création
  cancelEdit() {
    this.matchToEdit = null;
  }

  // Supprimer un match
  deleteMatch(id: number) {
    this.matchService.deleteMatch(id).subscribe(
      () => {
        this.loadMatches();
      },
      (error) => {
        console.error('Erreur lors de la suppression du match:', error);
      }
    );
  }
}
