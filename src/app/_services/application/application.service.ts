import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const baseUrl = environment.apiUrl + '/applications'
@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  
  constructor(private http: HttpClient) { }

  getApplications(){
    return this.http.get(baseUrl);
  }
}
