import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private infoEndP = 'https://api.covid19api.com/summary';

  constructor ( private http: HttpClient ) { }

  
  getInfoPaises(): Observable<any>{
    return this.http.get(this.infoEndP).pipe( map(res =>{
      return res["Countries"];
    }))
  }
  
  
  getInfoGeneral(): Observable<any>{
    return this.http.get(this.infoEndP).pipe( map(res => {
      return res["Global"];
    }))
  }


  getInfoSpain(): Observable<any>{
    return this.http.get(this.infoEndP).pipe( map(res =>{
      return res["Countries"].filter ( country => {
        return country.Country === 'Spain';
      })
    }))
  }
}
