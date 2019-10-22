import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private ht:HttpClient) { }

  get(){
    return this.ht.get('https://hn.algolia.com/api/v1/search_by_date?tags=story')
  }
  post(pa){
    return this.ht.post('http://localhost:3000/posts',pa)
  }
}
