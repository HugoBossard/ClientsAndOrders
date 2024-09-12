import { Component } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-edit',
  templateUrl: './icon-edit.component.html',
  styleUrl: './icon-edit.component.scss'
})
export class IconEditComponent {
  public iconEdit = faEdit;
}
