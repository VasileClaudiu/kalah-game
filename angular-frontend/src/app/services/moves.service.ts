import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Moves from 'src/app/models/moves.model';

@Injectable({
  providedIn: 'root'
})
export class MovesService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getAllMoves(): Observable<Moves[]>{
    return this.http.get<Moves[]>(`${this.apiServerUrl}/api/moves`);
  }

  getFilterMove(moves: string,numberPieces: number): Observable<Moves[]>{
    const headers = { 'Content-Type': 'application/json' };
    const body = { };
    return this.http.post<Moves[]>(`${this.apiServerUrl}/api/moves?moves=`+moves+`&numberPieces=`+numberPieces,body,{headers});
  }
}
