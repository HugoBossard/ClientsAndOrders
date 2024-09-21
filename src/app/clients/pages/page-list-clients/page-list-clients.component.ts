import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    "Actions",
    "Name",
    "TotalCaHt",
    "Tva",
    "Comment",
    "State"
  ];

  states: String[] = Object.values(StateClient);

  constructor(private clientsService: ClientsService, private router: Router) {
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

  editClient(client: Client) {
    this.router.navigate(["clients", "edit", client.id]);
  }

  deleteClient(client: Client) {
    const wantToDelete = confirm("Voulez-vous réellement supprimer ce client ?");

    if (!wantToDelete) {
      return;
    }

    this.clientsService.deleteClientById(client.id).subscribe();
  }
}