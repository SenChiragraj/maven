import { HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './models/Post';

@Injectable({
  providedIn: 'root'
})

export class ServiceService  {

  constructor(private http : HttpClient) { }


  getApiData(): Observable<Post[]>{
    return this.http.get<Post[]>('https://silver-umbrella-qj5w65p5475f4pjj-3000.app.github.dev/posts')
  }
}
