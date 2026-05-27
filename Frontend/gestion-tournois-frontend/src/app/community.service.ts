import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {
  private apiUrl = 'http://localhost:8080/api/posts';

  constructor(private http: HttpClient) {}

  createPost(post: FormData): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post);
  }

  updatePost(post: FormData, id: number): Observable<Post> {
    return this.http.put<Post>(`${this.apiUrl}/${id}`, post);
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  deletePost(postId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${postId}`);
  }

  likePost(postId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${postId}/like`, {});
  }

  addComment(postId: number, user: string, text: string): Observable<any> {
    const url = `${this.apiUrl}/${postId}/comments`;
    const body = { user, text }; 

    return this.http.post(url, body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
}
