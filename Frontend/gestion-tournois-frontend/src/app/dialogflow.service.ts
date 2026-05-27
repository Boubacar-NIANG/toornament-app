// dialogflow.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogflowService {
  private apiUrl = 'http://localhost:8080/api/dialogflow/detectIntent'; 

  constructor(private http: HttpClient) {}

  sendMessage(sessionId: string, text: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}?sessionId=${sessionId}&text=${text}`, {});
  }
}
