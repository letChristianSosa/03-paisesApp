import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl = 'https://restcountries.com/v3.1/';
  constructor(private http: HttpClient) {}

  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,flags,population,cca2');
  }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  buscarPorCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  buscarRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  buscarPaisPorCodigo(termino: string): Observable<Country> {
    const params = new HttpParams().set(
      'fields',
      'name,capital,flags,population,translations,continents,area'
    );
    const url = `${this.apiUrl}/alpha/${termino}`;

    return this.http.get<Country>(url, { params });
  }
}
