import { Component } from '@angular/core';
import { CommunityService } from '../community.service'; // Service pour gérer les requêtes HTTP
import { Post } from '../models/post.model'; // Assurez-vous que vous avez un modèle Post
import { PostService } from '../services/post.service'; // Assurez-vous que le chemin est correct

@Component({
  selector: 'app-dashboard-community',
  templateUrl: './dashboard-community.component.html',
  styleUrls: ['./dashboard-community.component.css']
})
export class DashboardCommunityComponent {
  post = {
    titre: '',
    photo: '',
    texte: ''
  };

  selectedFile: File | null = null;
  posts: any[] = [];
  selectedPost: Post = new Post(0, '', '', 0);
  editMode: boolean = false;

  constructor(private communityService: CommunityService, private postService: PostService) {
    this.loadPosts(); 
    this.getPosts();
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = () => {
        const mimeType = file.type; // Obtenir le type MIME du fichier
        if (mimeType.match(/image\/*/) != null) { // Vérifier que c'est une image
          this.post.photo = reader.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (!this.post.titre || !this.post.texte) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    const formData = new FormData();
    formData.append('titre', this.post.titre);
    formData.append('texte', this.post.texte);

    if (this.selectedFile) {
      formData.append('photo', this.selectedFile, this.selectedFile.name);
    }

    this.communityService.createPost(formData).subscribe(
      response => {
        console.log('Post créé :', response);
        this.loadPosts();
      },
      error => {
        console.error('Erreur lors de la création du post :', error);
      }
    );
  }

  loadPosts() {
    this.communityService.getPosts().subscribe(
      (response: any) => {
        this.posts = response;
      },
      error => {
        console.error('Erreur lors du chargement des posts :', error);
      }
    );
  }

  getPosts(): void {
    this.postService.getPosts().subscribe((data: Post[]) => {
      this.posts = data;
    });
  }

  onEditPost(post: Post) {
    this.selectedPost = { ...post };
    this.editMode = true;
  }

  updatePost(): void {
    if (!this.selectedPost.titre || !this.selectedPost.texte) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    const formData = new FormData();
    formData.append('titre', this.selectedPost.titre);
    formData.append('texte', this.selectedPost.texte);

    if (this.selectedFile) {
      formData.append('photo', this.selectedFile, this.selectedFile.name);
    }

    this.communityService.updatePost(formData, this.selectedPost.id).subscribe(
      (response: any) => {
        console.log('Post updated:', response);
        this.loadPosts();
        this.editMode = false;
      },
      (error: any) => {
        console.error('Error updating post:', error);
      }
    );
  }

  deletePost(postId: number) {
    this.communityService.deletePost(postId).subscribe(
      response => {
        console.log('Post supprimé :', response);
        this.loadPosts();
      },
      error => {
        console.error('Erreur lors de la suppression du post :', error);
      }
    );
  }
}
