import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {TodoItem} from '../interfaces/todo-item';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable()
export class JsonApiService {

  private url = 'https://my-json-server.typicode.com/linda/todo-list-api/items';

  constructor(  private http: HttpClient,
  ) { }

  getFullFakeList(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.url)
        .pipe(tap(items => console.log(items))) ;
  }

}
