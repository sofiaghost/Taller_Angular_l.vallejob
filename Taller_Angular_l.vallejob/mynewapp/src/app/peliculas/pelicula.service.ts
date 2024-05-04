import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pelicula } from './pelicula';
import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  private apiUrl = environment.baseUrl+"/series.json";

constructor(private http: HttpClient) { }
getPeliculas(): Observable<Pelicula[]>{
  return this.http.get<Pelicula[]>(this.apiUrl);
}

}
