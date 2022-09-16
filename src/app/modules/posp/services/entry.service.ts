import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {  SavePospInput, SavePospOutput } from '../models/entry';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(private http:HttpClient) { }

    savePosp(input : SavePospInput):Observable<SavePospOutput>{
        const httpOptions = {
              headers: new HttpHeaders({ 'Content-Type': 'application/json',
            })
           };
        return this.http.post<SavePospOutput>(`${environment.baseUrl}/CommonAPI/SavePOSPCustomer`,input,httpOptions)
      }
}