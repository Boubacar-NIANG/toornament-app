import { Component } from '@angular/core';
import { CommunityService } from '../community.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent {
  posts: any[] = [];

  constructor(private communityService: CommunityService) {
    this.loadPosts();
  }

  loadPosts() {
    this.communityService.getPosts().subscribe(
      (response: any) => {
        this.posts = response.map((post: any) => {
          return {
            ...post,
            newCommentUser: '', 
            newCommentText: ''  
          };
        });
      },
      (error: HttpErrorResponse) => {
        console.error('Erreur lors du chargement des posts :', error);
        console.error('La réponse semble être mal formatée ou incorrecte.');
      }
    );
  }

  commentPost(post: any) {
    if (!post.newCommentUser || !post.newCommentText) {
      alert('Veuillez entrer un nom et un commentaire.');
      return;
    }

    this.communityService.addComment(post.id, post.newCommentUser, post.newCommentText).subscribe(
      response => {
        console.log('Commentaire ajouté :', response);
        this.loadPosts();

        // Réinitialiser les champs de saisie après l'envoi du commentaire
        post.newCommentUser = '';
        post.newCommentText = '';
      },
      (error: HttpErrorResponse) => {
        console.error('Erreur lors de l\'ajout du commentaire :', error);
        if (error.status === 400) {
          console.error('Les données du commentaire sont invalides.');
        } else if (error.status === 500) {
          console.error('Erreur interne du serveur.');
        }
      }
    );
  }

  likePost(postId: number) {
    this.communityService.likePost(postId).subscribe(
      response => {
        console.log('Post liké :', response);
        this.loadPosts();
      },
      (error: HttpErrorResponse) => {
        console.error('Erreur lors du like du post :', error);
      }
    );
  }
}
