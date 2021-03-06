import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatoService {

  constructor(private httpClient: HttpClient) { }

  private API_SERVER = 'http://localhost:8080/localidad/';

  public getDato(): Observable<any>{
    return this.httpClient.post(this.API_SERVER, 1);
  }
}
