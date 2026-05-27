import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from '../match.service';
import { PredictionService } from '../prediction.service';

@Component({
  selector: 'app-tournois',
  templateUrl: './tournois.component.html',
  styleUrls: ['./tournois.component.css']
})
export class TournoisComponent implements OnInit {
  currentImage: string = 'assets/img1.png'; // Par défaut, l'image initiale
  activeSection: string = 'img1.png'; // Section active par défaut
  matches: any[] = [];
  predictions: any[] = [];  // Ajoutez une variable pour les pronostics déjà effectués



  constructor(private router: Router, private matchService: MatchService,
    private predictionService: PredictionService) {}

  ngOnInit(): void {
    this.loadMatches();
    this.loadPredictions();  // Chargez les pronostics existants

  }

  loadMatches() {
    this.matchService.getMatches().subscribe((matches) => {
      this.matches = matches.filter(match => match.statut === 'En attente');
    });
  }


  // Nouvelle méthode pour charger les pronostics
  loadPredictions() {
    this.predictionService.getPredictions().subscribe((predictions) => {
      this.predictions = predictions;
    });
  }


  // Fonction pour trouver un match par son ID
  getMatchById(matchId: number): any {
    return this.matches.find(match => match.id === matchId);
  }

  submitPrediction(match: any) {
    const prediction = {
      matchId: match.id,
      predictedTeam: match.predictedTeam ? match.predictedTeam.nom : null,
      predictedScorer: match.predictedScorer || ''
    };
  
    if (!prediction.predictedTeam) {
      alert('Veuillez sélectionner une équipe gagnante.');
      return;
    }
  
    // Envoyez la requête au backend
    this.predictionService.savePrediction(prediction).subscribe(() => {
      alert('Pronostic envoyé avec succès!');
      this.loadPredictions(); // Recharger les pronostics après l'envoi
    }, (error) => {
      console.error('Erreur lors de l\'envoi du pronostic :', error);
    });
  }
  
  

  // Méthode pour changer l'image selon la sélection
  changeImage(imageName: string) {
    this.currentImage = `assets/${imageName}`;
    this.activeSection = imageName;
  }


  redirectToClassifications() {
    this.router.navigate(['/classements']);
  }
}
