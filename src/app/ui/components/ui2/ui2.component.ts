import { Component } from '@angular/core';

@Component({
  selector: 'app-ui2',
  templateUrl: './ui2.component.html',
  styleUrl: './ui2.component.scss'
})
export class Ui2Component { 
  public open: boolean = true;

  public toggle() {
    this.open = !this.open;
  }
}