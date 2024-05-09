import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client } from '../Models/Client';

const baseurl = "http://localhost:8080/api/Client";

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  private baseUrl: string = "http://localhost:8080/api/Client";
  private baseUrl2: string = "http://localhost:8080/api/Client/updateclient";
  private baseUrl3: string = "http://localhost:8080/api/Client/deleteclient";


  constructor(private http: HttpClient) { }
  getClientById(id: number): Observable<Client> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Client>(url);
  }
  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl).pipe(
      map(response => response)
    );
  }  

  create(data: any): Observable<Client> {
    return this.http.post<Client>("http://localhost:8080/api/Client/save", data).pipe(
      map(response => response)
    );
  }

  
  update(id: string,data: any): Observable<Client> {
    return this.http.put<Client>(`${this.baseUrl2}/${id}`, data).pipe(
      map(response => response)
    );
  }

  

  delete(id: String): Observable<Client> {
    return this.http.delete<Client>(`${this.baseUrl3}/${id}`).pipe(
      map(response => response)
    );
  }

  deleteAll(): Observable<Client> {
    return this.http.delete<Client>(this.baseUrl).pipe(
      map(response => response)
    );
  }

  getClient(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.baseUrl}/${id}`).pipe(
      map(response => response)
    )
  }


  getAllClient(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.baseUrl}`);
  }

  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.baseUrl}`);
  }




  searchClient(searchTerm: string): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.baseUrl}`).pipe(
      map(client => {
        if (!isNaN(+searchTerm)) { // Vérifie si searchTerm est un nombre
          return client.filter(c => c.libelle === searchTerm);
        } else if (searchTerm.includes('')) {
          const searchTermParts = searchTerm.split(' ').filter(part => part.trim() !== ''); // Sépare les parties de searchTerm
          const searchTermRegex = new RegExp(searchTermParts.join('.*'), 'i'); // Crée une expression régulière pour rechercher le nom ou le prénom composé
          return client.filter(s => searchTermRegex.test(s.numtva) || searchTermRegex.test(s.pays));
        } else {
          return client.filter(s => s.numtva === searchTerm || s.pays === searchTerm);
        }
      })
    );
  }
  
 
}









