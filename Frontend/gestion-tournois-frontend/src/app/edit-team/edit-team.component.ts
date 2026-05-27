import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
  teamId: number | null = null;
  team = {
    nom: '',
    categorie: '',
    tournoi: {
      id: null
    }
  };
  tournaments: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    // Get the team ID from the URL parameters
    this.teamId = Number(this.route.snapshot.paramMap.get('id'));

    // Load the list of tournaments for the dropdown
    this.loadTournaments();

    // Load the team details
    if (this.teamId) {
      this.loadTeamDetails(this.teamId);
    }
  }

  // Load the list of tournaments from the backend
  loadTournaments() {
    this.http.get<any[]>('http://localhost:8080/api/tournaments')
      .subscribe(
        (response) => {
          this.tournaments = response;
        },
        (error: HttpErrorResponse) => {
          console.error('Error loading tournaments:', error);
        }
      );
  }

  // Load the team details from the backend
  loadTeamDetails(teamId: number) {
    this.http.get<any>(`http://localhost:8080/api/teams/${teamId}`)
      .subscribe(
        (response) => {
          this.team = response;
        },
        (error: HttpErrorResponse) => {
          console.error('Error loading team details:', error);
        }
      );
  }

  // Update the team details by sending a PUT request to the backend
  updateTeam() {
    if (this.teamId) {
      this.http.put(`http://localhost:8080/api/teams/${this.teamId}`, this.team)
        .subscribe(
          (response) => {
            console.log('Team updated successfully:', response);
            this.router.navigate(['/admin/teams']); // Redirect after update
          },
          (error: HttpErrorResponse) => {
            console.error('Error updating team:', error);
            alert('Error updating the team. Please try again.');
          }
        );
    }
  }

  // Navigate back to the team list without saving
  cancel() {
    this.router.navigate(['/admin/teams']);
  }
}
