import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model'; // Assurez-vous que le chemin est correct

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:8080/api/posts'; // URL de l'API backend

  constructor(private http: HttpClient) {}

  // Récupérer tous les posts
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }


  createPost(post: FormData): Observable<Post> {
    return this.http.post<Post>(`${this.apiUrl}`, post, {
      headers: new HttpHeaders({
        // Ne pas spécifier 'Content-Type', car il est automatiquement géré par le navigateur pour 'FormData'
      })
    });
  }
  // // Créer un nouveau post
  // createPost(post: Post): Observable<Post> {
  //   return this.http.post<Post>(this.apiUrl, post);
  // }

  updatePost(post: Post): Observable<Post> {
    const url = `${this.apiUrl}/${post.id}`;
    return this.http.put<Post>(url, post);
  }

  // Supprimer un post par son ID
  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
