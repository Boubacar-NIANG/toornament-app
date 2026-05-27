import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TournoisComponent } from './tournois/tournois.component';
import { SocialComponent } from './social/social.component';
import { ContactComponent } from './contact/contact.component';
import { PresentationComponent } from './presentation/presentation.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardCommunityComponent } from './dashboard-community/dashboard-community.component';
import { DashboardSuperAdminComponent } from './dashboard-super-admin/dashboard-super-admin.component';
import { CreateTournamentComponent } from './create-tournament/create-tournament.component';
import { EditTournamentComponent } from './edit-tournament/edit-tournament.component';
import { TeamManagementComponent } from './team-management/team-management.component';
import { CreateTeamComponent } from './create-team/create-team.component';
import { EditTeamComponent } from './edit-team/edit-team.component';  
import { GestionMatchsComponent } from './gestion-matchs/gestion-matchs.component';
import { ClassementsComponent } from './classements/classements.component';  // Assurez-vous d'avoir créé ce composant
import { UserManagementComponent } from './user-management/user-management.component'; // New User Management Component
import { ChatbotComponent } from './chatbot/chatbot.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'fil-actualite', component: SocialComponent },
  { path: 'tournois', component: TournoisComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'dashboard-admin', component: DashboardAdminComponent },
  { path: 'dashboard-community', component: DashboardCommunityComponent },
  { path: 'dashboard-superadmin', component: DashboardSuperAdminComponent },
  { path: 'create-tournament', component: CreateTournamentComponent },
  { path: 'edit-tournament/:id', component: EditTournamentComponent },
  { path: 'admin/teams', component: TeamManagementComponent },
  { path: 'create-team', component: CreateTeamComponent },
  { path: 'edit-team/:id', component: EditTeamComponent },  // Route pour modifier une équipe
  { path: 'gestion-matchs', component: GestionMatchsComponent },
  { path: 'classements', component: ClassementsComponent }, // Page des classements des équipes et des joueurs
  { path: 'admin/users', component: UserManagementComponent }, // Route for User Management
  { path: 'chatbot', component: ChatbotComponent }, // Page pour le chatbot


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
