import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from './post'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private _url:string ="https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) { }
  getPost(): Observable<IPost[]>{
    return this.http.get<IPost[]>(this._url);
    
  }
}
