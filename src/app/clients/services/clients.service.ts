import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { StateClient } from '../../core/enums/state-client';
import { Client } from '../../core/models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private collection$: Observable<Client[]>;
  private static API_URL = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection$ = http.get<Client[]>(`${ClientsService.API_URL}/clients`);
  }

  public get collection() {
    return this.collection$;
  }

  public set collection(collection: Observable<Client[]>) {
    this.collection$ = collection;
  }

  public add(client: Client): Observable<Client> {
    return this.http.post<Client>(`${ClientsService.API_URL}/clients`, client);
  }

  getById(clientId: Number): Observable<Client> {
    return this.http.get<Client>(`${ClientsService.API_URL}/clients/${clientId}`);
  }

  public update(client: Client): Observable<Client> {
    return this.http.put<Client>(`${ClientsService.API_URL}/clients/${client.id}`, client);
  }

  public changeStatus(client: Client, state: StateClient): Observable<Client> {
    const obj = new Client({ ...client });
    obj.state = state;
    return this.update(obj);
  }
}
