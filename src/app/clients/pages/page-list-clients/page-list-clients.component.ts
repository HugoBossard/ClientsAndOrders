import { Component } from '@angular/core';
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

  constructor(private clientsService: ClientsService) {
    clientsService.collection.subscribe((clients) => {
      this.clients = clients;
    });
  }
}