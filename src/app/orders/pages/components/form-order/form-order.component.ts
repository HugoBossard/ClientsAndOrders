import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientsService } from '../../../../clients/services/clients.service';
import { StateOrder } from '../../../../core/enums/state-order';
import { Client } from '../../../../core/models/client';
import { Order } from '../../../../core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrl: './form-order.component.scss'
})
export class FormOrderComponent {
  states = Object.values(StateOrder);
  clients!: Client[];

  @Input() init!: Order;
  @Output() submitted = new EventEmitter<Order>();
  form!: FormGroup;
  selectedClientName!: String;
  selectedState!: String;
  private fb: FormBuilder = inject(FormBuilder);

  constructor(private clientsService: ClientsService) {}

  ngOnInit() {
    this.clientsService.getById(this.init.id).subscribe((client) => {
      this.selectedClientName = client.name;
      this.selectedState = client.state;
    });

    this.clientsService.collection.subscribe((clients) => {
      this.clients = clients;
    });

    this.form = this.fb.group({
      tjmHt: [this.init.tjmHt],
      nbJours: [this.init.nbJours],
      tva: [this.init.tva],
      state: [this.init.state],
      client: [
        this.init.client,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ],
      ],
      comment: [this.init.comment],
      typePresta: [this.init.typePresta, Validators.required],
      id: [this.init.id],
    });
  }

  submit() {
    this.submitted.emit(this.form.value);
  }
}