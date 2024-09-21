import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { StateClient } from '../../core/enums/state-client';
import { Client } from '../../core/models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private collection$ = new BehaviorSubject<Client[]>([]);
  private static API_URL = environment.urlApi;

  constructor(private http: HttpClient) {
    this.refreshCollection();
  }

  public refreshCollection() {
    this.http.get<Client[]>(`${ClientsService.API_URL}/clients`)
    .pipe(
      map((clients) => {
        return clients.map((client) => new Client({...client}));
      })
    )
    .subscribe((data) => {
      this.collection$.next(data);
    });
  }

  public get collection() {
    return this.collection$;
  }

  public add(client: Client): Observable<Client> {
    return this.http.post<Client>(`${ClientsService.API_URL}/clients`, client)
    .pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }

  getById(clientId: Number): Observable<Client> {
    return this.http.get<Client>(`${ClientsService.API_URL}/clients/${clientId}`);
  }

  public update(client: Client): Observable<Client> {
    return this.http.put<Client>(`${ClientsService.API_URL}/clients/${client.id}`, client)
    .pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }

  public deleteClientById(clientId: Number) {
    return this.http.delete(`${ClientsService.API_URL}/clients/${clientId}`)
    .pipe(
      tap(() => {
        this.refreshCollection();
      })
    )
  }

  public changeStatus(client: Client, state: StateClient): Observable<Client> {
    const obj = new Client({ ...client });
    obj.state = state;
    return this.update(obj);
  }
}
