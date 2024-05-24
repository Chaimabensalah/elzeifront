import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MonthlyData } from '../Models/MonthlyData';

const baseurl = "http://localhost:8080/api/MonthlyData";

@Injectable({
  providedIn: 'root'
})
export class MonthlyDataService {

  private baseUrl: string = "http://localhost:8080/api/monthlyData";
  private baseUrl2: string = "http://localhost:8080/api/monthlyData/updatemonthlyData";
  private baseUrl3: string = "http://localhost:8080/api/monthlyData/deletemonthlyData";



  constructor(private http: HttpClient) { }
  getMonthlyDataById(id: number): Observable<MonthlyData> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<MonthlyData>(url);
  }
  getMonthlyDataS(): Observable<MonthlyData[]> {
    return this.http.get<MonthlyData[]>(this.baseUrl).pipe(
      map(response => response)
    );
  }

  create(data: any): Observable<MonthlyData> {
    return this.http.post<MonthlyData>("http://localhost:8080/api/monthlyData/save", data).pipe(
      map(response => response)
    );
  }
  update(id: string,data: any): Observable<MonthlyData> {
    return this.http.put<MonthlyData>(`${this.baseUrl2}/${id}`, data).pipe(
      map(response => response)
    );
  }
  delete(id: any): Observable<MonthlyData> {
    return this.http.delete<MonthlyData>(`${this.baseUrl3}/${id}`).pipe(
      map(response => response)
    );
  }

  deleteAll(): Observable<MonthlyData> {
    return this.http.delete<MonthlyData>(this.baseUrl).pipe(
      map(response => response)
    );
  }

  getMonthlyData(id: number): Observable<MonthlyData> {
    return this.http.get<MonthlyData>(`${this.baseUrl}/${id}`).pipe(
      map(response => response)
    )
  }


  getAllMonthlyData(): Observable<MonthlyData[]> {
    return this.http.get<MonthlyData[]>(`${this.baseUrl}`);
  }


}









