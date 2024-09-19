import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../../../core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrl: './page-add-client.component.scss'
})
export class PageAddClientComponent {
  client = new Client();

  constructor(private clientsService: ClientsService, private router: Router) {}

  handleSubmit(client: Client) {
    this.clientsService.add(client).subscribe(() => {
      this.navigate("clients");
    })
  }

  navigate(route: string) {
    this.router.navigateByUrl(route);
  }
}