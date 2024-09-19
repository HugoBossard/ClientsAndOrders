import { Directive, HostBinding, Input } from '@angular/core';
import { StateClient } from '../../core/enums/state-client';

@Directive({
  selector: '[appClientState]'
})
export class ClientStateDirective {
  @Input() appClientState!: StateClient;
  @HostBinding('class') tdClassName!: string;

  constructor() { }

  ngOnChanges() {
    this.tdClassName = `state-${this.appClientState.toLowerCase()}`;
  }
}
