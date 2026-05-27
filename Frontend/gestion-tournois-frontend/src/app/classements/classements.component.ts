import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classements',
  templateUrl: './classements.component.html',
  styleUrls: ['./classements.component.css']
})
export class ClassementsComponent implements OnInit {

  footballRankings = [
    { rank: 1, teamName: 'ESTM', points: 3, matchday: 1, wins: 1, losses: 0, draws: 0, goalsScored: 5, goalsConceded: 0, goalDifference: 5 },
    { rank: 2, teamName: 'ENSUP', points: 3, matchday: 1, wins: 1, losses: 0, draws: 0, goalsScored: 4, goalsConceded: 2, goalDifference: 2 },
    { rank: 3, teamName: 'ESMT', points: 3, matchday: 1, wins: 1, losses: 0, draws: 0, goalsScored: 3, goalsConceded: 1, goalDifference: 2 },
    { rank: 4, teamName: 'UGB', points: 1, matchday: 1, wins: 0, losses: 0, draws: 1, goalsScored: 0, goalsConceded: 0, goalDifference: 0 },
    { rank: 5, teamName: 'MIT', points: 1, matchday: 1, wins: 0, losses: 0, draws: 1, goalsScored: 0, goalsConceded: 0, goalDifference: 0 },
    { rank: 6, teamName: 'UCAD', points: 1, matchday: 1, wins: 0, losses: 0, draws: 1, goalsScored: 2, goalsConceded: 2, goalDifference: 0 },
    { rank: 7, teamName: 'ESP', points: 1, matchday: 1, wins: 0, losses: 0, draws: 1, goalsScored: 2, goalsConceded: 2, goalDifference: 0 },
    { rank: 8, teamName: 'CESAG', points: 0, matchday: 1, wins: 0, losses: 1, draws: 0, goalsScored: 1, goalsConceded: 3, goalDifference: -2 },
    { rank: 9, teamName: 'SUPDECO', points: 0, matchday: 1, wins: 0, losses: 1, draws: 0, goalsScored: 2, goalsConceded: 4, goalDifference: -2 },
    { rank: 10, teamName: 'IAM', points: 0, matchday: 1, wins: 0, losses: 1, draws: 0, goalsScored: 0, goalsConceded: 5, goalDifference: -5 },

  ];

  footballPlayerRankings = [
    { rank: 1, playerName: 'Diaw', playerSurname: 'Aliou', teamName: 'ESTM', goals: 3, matchesPlayed: 1 },
    { rank: 2, playerName: 'Fall', playerSurname: 'Ousmane', teamName: 'ENSUP', goals: 2, matchesPlayed: 1 },
    { rank: 2, playerName: 'Ndiaye', playerSurname: 'Cheikh', teamName: 'ENSUP', goals: 2, matchesPlayed: 1 },
    { rank: 2, playerName: 'Tamba', playerSurname: 'Thierno', teamName: 'UCAD', goals: 2, matchesPlayed: 1 },
    { rank: 3, playerName: 'Fall', playerSurname: 'Samba', teamName: 'ESMT', goals: 1, matchesPlayed: 1 },
    { rank: 3, playerName: 'Sall', playerSurname: 'Oumar', teamName: 'ESTM', goals: 1, matchesPlayed: 1 },
    { rank: 3, playerName: 'Lo', playerSurname: 'Thierno', teamName: 'SUPDECO', goals: 1, matchesPlayed: 1 },
    { rank: 3, playerName: 'Sow', playerSurname: 'Cheick', teamName: 'SUPDECO', goals: 1, matchesPlayed: 1 },
    { rank: 3, playerName: 'Faye', playerSurname: 'Bachir', teamName: 'ESMT', goals: 1, matchesPlayed: 1 },
    { rank: 3, playerName: 'Ndour', playerSurname: 'Mouhamed', teamName: 'ESMT', goals: 1, matchesPlayed: 1 },
    { rank: 3, playerName: 'Aw', playerSurname: 'Omar', teamName: 'ESMT', goals: 1, matchesPlayed: 1 },
    { rank: 3, playerName: 'Mbaye', playerSurname: 'Moussa', teamName: 'CESAG', goals: 1, matchesPlayed: 1 },
    { rank: 3, playerName: 'Lo', playerSurname: 'Lamine', teamName: 'ESP', goals: 1, matchesPlayed: 1 },
    { rank: 3, playerName: 'Seck', playerSurname: 'Omar', teamName: 'ESP', goals: 1, matchesPlayed: 1 },


  ];

  footballAssistRankings = [
    { rank: 1, playerName: 'Diokh', playerSurname: 'Cheikh', teamName: 'ESTM', assists: 2, matchesPlayed: 1 },
    { rank: 1, playerName: 'Gueye', playerSurname: 'Dam', teamName: 'ESMT', assists: 2, matchesPlayed: 1 },
    { rank: 2, playerName: 'Issa', playerSurname: 'Seydina', teamName: 'ESMT', assists: 1, matchesPlayed: 1 },
    { rank: 2, playerName: 'Diarra', playerSurname: 'Ibrahim', teamName: 'ESTM', assists: 1, matchesPlayed: 1 },
    { rank: 2, playerName: 'Gueye', playerSurname: 'Lamine', teamName: 'ENSUP', assists: 1, matchesPlayed: 1 },
    { rank: 2, playerName: 'Lo', playerSurname: 'Samba', teamName: 'UCAD', assists: 1, matchesPlayed: 1 },
    { rank: 2, playerName: 'Diaw', playerSurname: 'Oumar', teamName: 'ESP', assists: 1, matchesPlayed: 1 },

  ];

  // Classement des équipes de basketball/handball
  basketballRankings = [
    { rank: 1, teamName: 'SUPDECO', points: 3, matchday: 1, wins: 1, losses: 0, pointsScored: 88, pointsConceded: 61, pointDifference: 27 },
    { rank: 2, teamName: 'ESTM', points: 3, matchday: 1, wins: 1, losses: 0, pointsScored: 67, pointsConceded: 45, pointDifference: 22 },
    { rank: 3, teamName: 'ESMT', points: 3, matchday: 1, wins: 1, losses: 0, pointsScored: 92, pointsConceded: 75, pointDifference: 17 },
    { rank: 4, teamName: 'IAM', points: 3, matchday: 1, wins: 1, losses: 0, pointsScored: 82, pointsConceded: 69, pointDifference: 13 },
    { rank: 5, teamName: 'ESP', points: 3, matchday: 1, wins: 1, losses: 0, pointsScored: 79, pointsConceded: 75, pointDifference: 4 },
    { rank: 6, teamName: 'UCAD', points: 0, matchday: 1, wins: 0, losses: 1, pointsScored: 75, pointsConceded: 79, pointDifference: -4 },
    { rank: 7, teamName: 'UGB', points: 0, matchday: 1, wins: 0, losses: 1, pointsScored: 69, pointsConceded: 82, pointDifference: -13 },
    { rank: 8, teamName: 'MIT', points: 0, matchday: 1, wins: 0, losses: 1, pointsScored: 75, pointsConceded: 92, pointDifference: -17 },
    { rank: 9, teamName: 'ENSUP', points: 0, matchday: 1, wins: 0, losses: 1, pointsScored: 45, pointsConceded: 67, pointDifference: -22 },
    { rank: 10, teamName: 'CESAG', points: 0, matchday: 1, wins: 0, losses: 1, pointsScored: 61, pointsConceded: 88, pointDifference: -27 },

  ];

  // Classement des joueurs de basketball (points par match)
  basketballPlayerRankings = [
    { rank: 1, playerName: 'Niang', playerSurname: 'Boubacar', teamName: 'ESMT', pointsPerMatch: 37 },
    { rank: 2, playerName: 'kane', playerSurname: 'Cheikh', teamName: 'SUPDECO', pointsPerMatch: 30 },
    { rank: 3, playerName: 'Thiam', playerSurname: 'Moussa', teamName: 'ESP', pointsPerMatch: 25 },
    { rank: 4, playerName: 'Diarra', playerSurname: 'Samba', teamName: 'ESTM', pointsPerMatch: 20 },
    { rank: 5, playerName: 'Baye', playerSurname: 'Aliou', teamName: 'IAM', pointsPerMatch: 20 },
    { rank: 6, playerName: 'Mbaye', playerSurname: 'Ali', teamName: 'UCAD', pointsPerMatch: 18 },
    { rank: 7, playerName: 'Gueye', playerSurname: 'Moussa', teamName: 'UGB', pointsPerMatch: 18 },
    { rank: 8, playerName: 'Diaw', playerSurname: 'Aliou', teamName: 'ENSUP', pointsPerMatch: 17 },
    { rank: 9, playerName: 'Ndiaye', playerSurname: 'Aliou', teamName: 'MIT', pointsPerMatch: 17 },
    { rank: 10, playerName: 'Gueye', playerSurname: 'Ali', teamName: 'CESAG', pointsPerMatch: 17 },
  ];

  // Classement des passeurs de basketball (passes par match)
  basketballAssistRankings = [
    { rank: 1, playerName: 'Seck', playerSurname: 'Malick', teamName: 'ESMT', assistsPerMatch: 13 },
    { rank: 2, playerName: 'Diaw', playerSurname: 'Thierno', teamName: 'SUPDECO', assistsPerMatch: 10 },
    { rank: 3, playerName: 'Gueye', playerSurname: 'Mamadou', teamName: 'ESP', assistsPerMatch: 8 },
    { rank: 4, playerName: 'kane', playerSurname: 'Lamine', teamName: 'ESTM', assistsPerMatch: 8 },
    { rank: 5, playerName: 'Baye', playerSurname: 'Ibrahim', teamName: 'UCAD', assistsPerMatch: 7 },
    { rank: 6, playerName: 'Thiam', playerSurname: 'Ousmane', teamName: 'UGB', assistsPerMatch: 7 },
    { rank: 7, playerName: 'Mbaye', playerSurname: 'Ousmane', teamName: 'CESAG', assistsPerMatch: 6 },

  ];

  constructor() { }

  ngOnInit(): void { }
}
