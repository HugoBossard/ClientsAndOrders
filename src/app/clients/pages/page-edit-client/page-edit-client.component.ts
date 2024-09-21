import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../../../core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrl: './page-edit-client.component.scss'
})
export class PageEditClientComponent {
  private activatedRoute = inject(ActivatedRoute);
  client!: Client;

  constructor(private clientsService: ClientsService, private router: Router) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.clientsService.getById(params['id']).subscribe((client) => {
        this.client = client;
      });
    });
  }

  handleSubmit(client: Client) {
    this.clientsService.update(client).subscribe(() => {
      this.router.navigateByUrl("clients");
    });
  }
}