import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http : HttpClient) { 

  }

  getNewsData(){
  
    return this.http.get(`${API_URL}/top-headlines?country=us&category=business&apiKey=${API_KEY}`);
    }
    

  }

