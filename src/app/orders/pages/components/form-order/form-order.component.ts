import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from '../../../../core/enums/state-order';
import { Order } from '../../../../core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrl: './form-order.component.scss'
})
export class FormOrderComponent {
  status = Object.values(StateOrder);
  @Input() init!: Order;
  @Output() submitted = new EventEmitter<Order>();
  form!: FormGroup;

  // form2 = new FormGroup({
  //   tjmHt: new FormControl(this.init.tjmHt),
  //   nbJours: new FormControl(this.init.nbJours),
  // });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
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