import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { FitnessClass } from '../models/fitness-class';

@Injectable({
  providedIn: 'root'
})
export class FitnessService {

  constructor(private http : HttpClient) { }

  apiUrl = 'https://silver-umbrella-qj5w65p5475f4pjj-3000.app.github.dev/classes';

  getClasses() : Observable<FitnessClass[]> {
    return this.http.get<FitnessClass[]>(`${this.apiUrl}`);
  }

  addClass(fitnessClass : FitnessClass) : Observable<FitnessClass> {
    return this.http.post<FitnessClass>(`${this.apiUrl}`, fitnessClass);
  }

  updateClass(id : string, fitnessClass : FitnessClass) : Observable<FitnessClass> {
    return this.http.put<FitnessClass>(`${this.apiUrl}/${id}`, fitnessClass);
  }

  deleteClass(id : string) : Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getClassById(id :string) : Observable<FitnessClass> {
    return this.http.get<FitnessClass>(`${this.apiUrl}/${id}`);
  }
}
