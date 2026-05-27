import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; 
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TournoisComponent } from './tournois/tournois.component';
import { SocialComponent } from './social/social.component';
import { ContactComponent } from './contact/contact.component';
import { PresentationComponent } from './presentation/presentation.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { SafeUrlPipe } from './safe-url.pipe';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardCommunityComponent } from './dashboard-community/dashboard-community.component';
import { DashboardSuperAdminComponent } from './dashboard-super-admin/dashboard-super-admin.component';
import { CreateTournamentComponent } from './create-tournament/create-tournament.component';
import { EditTournamentComponent } from './edit-tournament/edit-tournament.component';
import { TeamManagementComponent } from './team-management/team-management.component';
import { CreateTeamComponent } from './create-team/create-team.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { GestionMatchsComponent } from './gestion-matchs/gestion-matchs.component';
import { ClassementsComponent } from './classements/classements.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ChatbotComponent } from './chatbot/chatbot.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TournoisComponent,
    SocialComponent,
    ContactComponent,
    PresentationComponent,
    InscriptionComponent,
    ConnexionComponent,
    SafeUrlPipe,
    DashboardAdminComponent,
    DashboardCommunityComponent,
    DashboardSuperAdminComponent,
    CreateTournamentComponent,
    EditTournamentComponent,
    TeamManagementComponent,
    CreateTeamComponent,
    EditTeamComponent,
    GestionMatchsComponent,
    ClassementsComponent,
    UserManagementComponent,
    ChatbotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
