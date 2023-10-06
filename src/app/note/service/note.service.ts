import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from 'src/app/shared/models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  readonly API_URL: string ;

  constructor(private http : HttpClient) {
    this.API_URL = "http://localhost:3000/notes"
  }

  add(note: Note): Observable<Note> {
    return this.http.post<Note>(this.API_URL, note);
  }

  getAll(): Observable<Note[]> {
    return this.http.get<Note[]>(this.API_URL);
  }

  delete(note: Note): Observable<Note> {
    return this.http.delete<Note>(this.API_URL + '/' + note.id);
  }

  edit(note: Note): Observable<Note> {
    return this.http.put<Note>(this.API_URL + '/' + note.id, note);
  }
}
