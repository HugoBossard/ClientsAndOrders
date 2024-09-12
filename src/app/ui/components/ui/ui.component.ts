import { Component } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrl: './ui.component.scss'
})
export class UiComponent {
  public open: boolean = true;

  public toggle() {
    this.open = !this.open;
  }
}