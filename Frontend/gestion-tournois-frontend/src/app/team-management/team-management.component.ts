import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router'; // Assurez-vous d'importer Router

@Component({
  selector: 'app-team-management',
  templateUrl: './team-management.component.html',
  styleUrls: ['./team-management.component.css']
})
export class TeamManagementComponent implements OnInit {
  teams: any[] = [];
  newTeam = {
    nom: '',
    categorie: '',
    tournoiId: null as number | null
  };
  selectedTeam: any = null;
  members: any[] = [];
  newMember = {
    nom: '',
    prenom: '',
    equipeId: null as number | null
  };
  editingMember: any = null;  // Variable pour stocker le membre en cours de modification


  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.loadTeams();
  }


  loadTeams() {
    this.http.get('http://localhost:8080/api/teams').subscribe(
      (response: any) => {
        this.teams = response.map((team: any) => {
          // Vérifiez si "tournoi" est un objet ou simplement un ID
          const tournoiNom = team.tournoi && typeof team.tournoi === 'object' ? team.tournoi.nom : 'N/A';
          return {
            ...team,
            tournoiNom: tournoiNom
          };
        });
      },
      (error: HttpErrorResponse) => {
        console.error('Erreur lors du chargement des équipes:', error);
      }
    );
  }
  

  createTeam() {
    this.http.post('http://localhost:8080/api/teams', this.newTeam).subscribe(
      (response: any) => {
        console.log('Équipe créée :', response);
        this.loadTeams(); // Recharger les équipes après création
      },
      (error: HttpErrorResponse) => {
        console.error('Erreur lors de la création de l\'équipe :', error);
      }
    );
  }

  navigateToEditTeam(teamId: number) {
    this.router.navigate(['/edit-team', teamId]);
  }

  editTeam(teamId: number) {
    // Logique de modification d'une équipe
  }

  deleteTeam(teamId: number) {
    this.http.delete(`http://localhost:8080/api/teams/${teamId}`).subscribe(
      (response: any) => {
        console.log('Équipe supprimée :', response);
        this.loadTeams(); // Recharger les équipes après suppression
      },
      (error: HttpErrorResponse) => {
        console.error('Erreur lors de la suppression de l\'équipe :', error);
      }
    );
  }

  // Charger les membres d'une équipe sélectionnée
  viewMembers(teamId: number) {
    this.selectedTeam = teamId;
    this.http.get(`http://localhost:8080/api/teams/${teamId}/members`).subscribe(
      (response: any) => {
        this.members = response;
      },
      (error: HttpErrorResponse) => {
        console.error('Erreur lors du chargement des membres :', error);
      }
    );
  }



  addMember() {
    if (this.selectedTeam && this.newMember.nom && this.newMember.prenom) {
      const memberData = { ...this.newMember, equipeId: this.selectedTeam };
      this.http.post(`http://localhost:8080/api/teams/${this.selectedTeam}/members`, memberData).subscribe(
        (response: any) => {
          console.log('Membre ajouté:', response);
          this.members.push(response);
          this.newMember = { nom: '', prenom: '', equipeId: null }; 
        },
        (error: HttpErrorResponse) => {
          console.error('Erreur lors de l\'ajout du membre:', error);
        }
      );
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  }


  // Modifier un membre
  editMember(memberId: number) {
    this.editingMember = this.members.find(member => member.id === memberId);
    if (this.editingMember) {
      console.log('Détails du membre à modifier:', this.editingMember);
    } else {
      console.error('Membre non trouvé');
    }
  }

  // Enregistrer les modifications d'un membre
  updateMember() {
    if (this.editingMember && this.editingMember.id) {
      this.http.put(`http://localhost:8080/api/teams/${this.selectedTeam}/members/${this.editingMember.id}`, this.editingMember)
        .subscribe(
          (response) => {
            console.log('Membre modifié:', response);
            this.loadTeams();  // Recharger les équipes après modification
            this.editingMember = null;  // Réinitialiser le formulaire
          },
          (error: HttpErrorResponse) => {
            console.error('Erreur lors de la modification du membre:', error);
          }
        );
    }
  }
  
  deleteMember(memberId: number) {
    this.http.delete(`http://localhost:8080/api/teams/${this.selectedTeam}/members/${memberId}`).subscribe(
      (response: any) => {
        console.log('Membre supprimé:', response);
        this.members = this.members.filter(m => m.id !== memberId); 
      },
      (error: HttpErrorResponse) => {
        console.error('Erreur lors de la suppression du membre:', error);
      }
    );
  }
}
