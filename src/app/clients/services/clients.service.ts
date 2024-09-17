import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Client } from '../../core/models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private collection$: Observable<Client[]>;
  private static API_URL = environment.urlApi;

  constructor(private httpCLient: HttpClient) {
    this.collection$ = httpCLient.get<Client[]>(`${ClientsService.API_URL}/clients`);
  }

  public get collection() {
    return this.collection$;
  }

  public set collection(collection: Observable<Client[]>) {
    this.collection$ = collection;
  }
}
