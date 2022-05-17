import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Positions from '../models/positions.model';

@Injectable({
  providedIn: 'root'
})
export class PositionsService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getAllPositions(): Observable<Positions[]>{
    return this.http.get<Positions[]>(`${this.apiServerUrl}/api/positions`);
  }

  getLastPositions(): Observable<Positions[]>{
    return this.http.get<Positions[]>(`${this.apiServerUrl}/api/positions/last`);
  }
}
