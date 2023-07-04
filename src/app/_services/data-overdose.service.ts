import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataOverdoseService {

  constructor(
    private http: HttpClient
  ) {}

  GetTotalRateData(){
    return this.http.get('../../assets/TotalRates.csv', { responseType: 'text' });
  }

  }
