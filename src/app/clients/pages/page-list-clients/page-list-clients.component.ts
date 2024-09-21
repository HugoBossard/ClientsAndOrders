import { Component } from '@angular/core';
import { StateClient } from '../../../core/enums/state-client';
import { Client } from '../../../core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrl: './page-list-clients.component.scss'
})
export class PageListClientsComponent {
  clients!: Client[];
  
  headers: string[] = [
    "Name",
    "TotalCaHt",
    "Tva",
    "Comment",
    "State"
  ];

  states: String[] = Object.values(StateClient);

  constructor(private clientsService: ClientsService) {
    clientsService.collection.subscribe((clients) => {
      this.clients = clients;
    });
  }

  changeStatus(client: Client, $event: any) {
    const status = $event.target.value;

    this.clientsService.changeStatus(client, status).subscribe((data) => {
      Object.assign(client, data);
    });
  }
}