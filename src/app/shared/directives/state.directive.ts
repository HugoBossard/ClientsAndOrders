import { Directive, HostBinding, Input } from '@angular/core';
import { StateOrder } from '../../core/enums/state-order';

@Directive({
  selector: '[appState]'
})
export class StateDirective {
  @Input() appState!: StateOrder;
  @HostBinding('class') tdClassName!: string;

  constructor() { }

  ngOnChanges() {
    this.tdClassName = `state-${this.appState.toLowerCase()}`;
  }
}