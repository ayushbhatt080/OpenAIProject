import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TravelPackage } from '../models/travel-package';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  private readonly baseUrl = '/api/packages';

  constructor(private http: HttpClient) {}

  findAll(): Observable<TravelPackage[]> {
    return this.http.get<TravelPackage[]>(this.baseUrl);
  }

  findById(id: number): Observable<TravelPackage> {
    return this.http.get<TravelPackage>(`${this.baseUrl}/${id}`);
  }

  create(travelPackage: TravelPackage): Observable<TravelPackage> {
    return this.http.post<TravelPackage>(this.baseUrl, travelPackage);
  }

  update(id: number, travelPackage: TravelPackage): Observable<TravelPackage> {
    return this.http.put<TravelPackage>(`${this.baseUrl}/${id}`, travelPackage);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
