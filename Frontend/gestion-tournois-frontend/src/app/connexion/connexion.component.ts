import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  credentials = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.credentials).subscribe(
      (response: any) => {
        console.log('Connexion réussie :', response);
        localStorage.setItem('token', response.token); 
        this.redirectUser(response.role);
      },
      error => {
        console.error('Erreur de connexion :', error);
        alert('Échec de la connexion. Vérifiez vos informations.');
      }
    );
  }

  redirectUser(role: string) {
    switch (role) {
      case 'SuperAdministrateur':
        this.router.navigate(['/dashboard-superadmin']);
        break;
      case 'CommunityManager':
        this.router.navigate(['/dashboard-community']);
        break;
      case 'Representant':
        this.router.navigate(['/dashboard-representant']);
        break;
      case 'Administrateur':
        this.router.navigate(['/dashboard-admin']);
        break;
      default:
        this.router.navigate(['/']);
        break;
    }
  }
}
