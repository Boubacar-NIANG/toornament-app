import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  user = {
    nom: '',
    prenom: '',
    email: '',
    password: '',
    role: 'Administrateur'  // Définir automatiquement le rôle
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    console.log(this.user);  // Affichez les données avant de les envoyer
    this.authService.register(this.user).subscribe(
      response => {
        console.log('Inscription réussie :', response);
        this.router.navigate(['/connexion']); // Rediriger vers la page de connexion après l'inscription
      },
      error => {
        console.error('Erreur d\'inscription :', error);
        alert('Erreur lors de l\'inscription. Veuillez réessayer.');
      }
    );
  }
}
