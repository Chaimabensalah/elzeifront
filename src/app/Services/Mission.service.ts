import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Mission } from '../Models/Mission';

const baseurl = "http://localhost:8080/api/Mission";

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  private baseUrl: string = "http://localhost:8080/api/Mission";

  constructor(private http: HttpClient) { }
  getMissionById(id: number): Observable<Mission> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Mission>(url);
  }
  getMissionS(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.baseUrl).pipe(
      map(response => response)
    );
  }  

  create(data: any): Observable<Mission> {
    return this.http.post<Mission>("http://localhost:8080/api/Mission/save", data).pipe(
      map(response => response)
    );
  }

  update(id: string, data: any): Observable<Mission> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Mission>(url, data, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  delete(id: any): Observable<Mission> {
    return this.http.delete<Mission>(`${this.baseUrl}/${id}`).pipe(
      map(response => response)
    );
  }

  deleteAll(): Observable<Mission> {
    return this.http.delete<Mission>(this.baseUrl).pipe(
      map(response => response)
    );
  }

  getMission(id: number): Observable<Mission> {
    return this.http.get<Mission>(`${this.baseUrl}/${id}`).pipe(
      map(response => response)
    )
  }


  getAllMission(): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.baseUrl}`);
  }
 
}









