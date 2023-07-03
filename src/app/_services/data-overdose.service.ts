import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type' : 'application/json',
//     'X-My-custom-Header' : your-costum-value,
//     'Access-Control-Allow-Origin' : '*'
//   })
// }

@Injectable({
  providedIn: 'root'
})
export class DataOverdoseService {

  private baseUrl = 'https://data.cdc.gov/resource/95ax-ymtc.json';

  constructor(
    private http: HttpClient
  ) { }

  OverDoseData() {
    const url = `${this.baseUrl}`;

    // Optional: Set custom headers
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'X-My-custom-Header': 'your-custom-value',
    //     'Access-Control-Allow-Origin': '*'
    //   })
    // };

    // Make the API request
    return this.http.get(url)
      .toPromise()
      .then((data: any) => {
        // Log the headers and values to the console
        console.log('Response Headers:', data.headers);
        console.log('Response Data:', data);
        return data;
      })
      .catch((error: any) => {
        console.error('Error:', error);
        throw error;
      });
  }
}





