import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Casa } from '../model/casa';


@Injectable({
  providedIn: 'root'
})
export class CasaService {

  endpoint :string;

  constructor(public http : HttpClient) { 
    console.log('CasaService - constructor')
    this.endpoint = "http://localhost:3000/casas";

  }


  getAll(): Observable <any>{
    console.trace('FrutaService - getAll');
    return this.http.get(this.endpoint);
  }

  add(casa: Casa): Observable<any>{
    console.trace(`FrutaService add ${this.endpoint}`);
    console.log(casa.servicios);
    let body  = {
          "nombre": casa.nombre,
          "precio": casa.precio,
          "alquiler": casa.alquiler,
          "habitaciones" : casa.habitaciones,
          "direccion" : casa.direccion,
          "foto" : casa.foto,
          "servicios": casa.servicios
        };  
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post( this.endpoint, body , httpOptions );
}
}
