import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateClient } from '../../../../core/enums/state-client';
import { Client } from '../../../../core/models/client';
import { ClientsService } from '../../../services/clients.service';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrl: './form-client.component.scss'
})
export class FormClientComponent {
  form!: FormGroup;
  states: String[] = Object.values(StateClient);

  @Input() init!: Client;
  @Output() submitted = new EventEmitter<Client>();
  private fb: FormBuilder = inject(FormBuilder);

  constructor(private clientsService: ClientsService) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: [this.init.name, 
        [
          Validators.required,
          Validators.minLength(4)
        ]
      ],
      totalCaHt: [this.init.totalCaHt, 
        [
          Validators.required,
          Validators.min(1)
        ]
      ],
      tva: [this.init.tva,
        [
          Validators.required,
          Validators.min(1)
        ]
      ],
      comment: [this.init.comment,
        [
          Validators.required,
          Validators.minLength(5),
        ]
      ],
      state: [this.init.state],
      id: [this.init.id]
    });
  }

  submit() {
    this.submitted.emit(this.form.value);
  }
}