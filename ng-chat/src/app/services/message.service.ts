import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../shared/models/message';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private API = 'http://us-central-demoapp-1778c.cloudfunctions.net/v1';

  constructor(private http: HttpClient) { }

  fetch(cname: string): Observable<Message[]> {
    return this.http.get<Message[]>(
      `${this.API}/channels/${cname}/messages`
    );
  }
}
