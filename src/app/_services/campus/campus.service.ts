import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const baseUrl = environment.apiUrl +'/institutions';

@Injectable({
  providedIn: 'root'
})
export class CampusService {

  constructor(private http:HttpClient) { }
  getCampuses(){
    return this.http.get(baseUrl);
  }
}
