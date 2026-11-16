
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  Formation,
  FormationRequest
} from '../models/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private apiUrl = 'http://localhost:8082/api/formations';

  constructor(private http: HttpClient) {}

  // Afficher toutes les formations
  getFormations(): Observable<Formation[]> {
    return this.http.get<Formation[]>(this.apiUrl);
  }

  // Afficher une formation par son identifiant
  getFormationById(id: number): Observable<Formation> {
    return this.http.get<Formation>(`${this.apiUrl}/${id}`);
  }

  // Ajouter une formation
  addFormation(
    formation: FormationRequest
  ): Observable<Formation> {
    return this.http.post<Formation>(
      this.apiUrl,
      formation
    );
  }

  // Modifier une formation
  updateFormation(
    id: number,
    formation: FormationRequest
  ): Observable<Formation> {
    return this.http.put<Formation>(
      `${this.apiUrl}/${id}`,
      formation
    );
  }

  // Supprimer une formation
  deleteFormation(id: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiUrl}/${id}`
    );
  }
}
