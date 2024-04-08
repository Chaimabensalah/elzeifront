import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Salaries } from '../Models/Salaries';
const baseurl = "http://localhost:8080/api/salaries";

@Injectable({
  providedIn: 'root'
})
export class SalariesService {

  private baseUrl: string = "http://localhost:8080/api/salaries";

  constructor(private http: HttpClient) { }
  getSalariesById(id: number): Observable<Salaries> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Salaries>(url);
  }
  getSalariess(): Observable<Salaries[]> {
    return this.http.get<Salaries[]>(this.baseUrl).pipe(
      map(response => response)
    );
  }

  create(data: any): Observable<Salaries> {
    return this.http.post<Salaries>("http://localhost:8080/api/salaries/save", data).pipe(
      map(response => response)
    );
  }

  update(id: string, data: any): Observable<Salaries> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Salaries>(url, data, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  delete(id: any): Observable<Salaries> {
    return this.http.delete<Salaries>(`${this.baseUrl}/${id}`).pipe(
      map(response => response)
    );
  }

  deleteAll(): Observable<Salaries> {
    return this.http.delete<Salaries>(this.baseUrl).pipe(
      map(response => response)
    );
  }

  getSalaries(id: number): Observable<Salaries> {
    return this.http.get<Salaries>(`${this.baseUrl}/${id}`).pipe(
      map(response => response)
    )
  }







  getAllSalaries(): Observable<Salaries[]> {
    return this.http.get<Salaries[]>(`${this.baseUrl}`);
  }
  searchSalaries(searchTerm: string): Observable<Salaries[]> {
    return this.http.get<Salaries[]>(`${this.baseUrl}`).pipe(
      map(salaries => {
        if (!isNaN(+searchTerm)) { // Vérifie si searchTerm est un nombre
          return salaries.filter(s => s.matricule === searchTerm);
        } else if (searchTerm.includes('')) {
          const searchTermParts = searchTerm.split(' ').filter(part => part.trim() !== ''); // Sépare les parties de searchTerm
          const searchTermRegex = new RegExp(searchTermParts.join('.*'), 'i'); // Crée une expression régulière pour rechercher le nom ou le prénom composé
          return salaries.filter(s => searchTermRegex.test(s.nom) || searchTermRegex.test(s.prenom));
        } else {
          return salaries.filter(s => s.numSS === searchTerm || s.prenom === searchTerm);
        }
      })
    );
  }
  
  

  uploadPdf(file: File): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('pdfFile', file, file.name);

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return this.http.post<string>(`${this.baseUrl}/uploadpdf`, formData, { headers });
  }




  uploadFile(formData: FormData) {
    return this.http.post<any>('http://localhost:8080/api/uploadPDF', formData);
  }
}









