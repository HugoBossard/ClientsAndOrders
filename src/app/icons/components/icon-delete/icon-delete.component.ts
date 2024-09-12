import { Component } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-delete',
  templateUrl: './icon-delete.component.html',
  styleUrl: './icon-delete.component.scss'
})
export class IconDeleteComponent {
  public iconDelete = faTrash;
}
