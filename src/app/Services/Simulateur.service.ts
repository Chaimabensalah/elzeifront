import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Simulateur } from '../Models/Simulateur.model';
const baseurl = "http://localhost:8080/api";

@Injectable({
  providedIn: 'root'
})
export class SimulateurService {

  private baseUrl: string = "http://localhost:8080/api";

  constructor(private http: HttpClient) { }
  getSimulateurById(id: number): Observable<Simulateur> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Simulateur>(url);
  }
  getSimulateurs(): Observable<Simulateur[]> {
    return this.http.get<Simulateur[]>(this.baseUrl).pipe(
      map(response => response)
    );
  }

  create(data: any): Observable<Simulateur> {
    return this.http.post<Simulateur>("http://localhost:8080/api/save", data).pipe(
      map(response => response)
    );
  }

  update(id: any, data: any): Observable<Simulateur> {
    return this.http.put<Simulateur>(`${this.baseUrl}/${id}`, data).pipe(
      map(response => response)
    );
  }

  delete(id: any): Observable<Simulateur> {
    return this.http.delete<Simulateur>(`${this.baseUrl}/${id}`).pipe(
      map(response => response)
    );
  }

  deleteAll(): Observable<Simulateur> {
    return this.http.delete<Simulateur>(this.baseUrl).pipe(
      map(response => response)
    );
  }

  getSimulateur(id: number): Observable<Simulateur> {
    return this.http.get<Simulateur>(`${this.baseUrl}/${id}`).pipe(
      map(response => response)
    )
  }
}
