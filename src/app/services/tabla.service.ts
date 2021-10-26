import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TablaService {

  constructor(private httpClient: HttpClient) { }

  private API_SERVER= "http://localhost:8080/gestor/";

  public getAllNombre(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }
}
