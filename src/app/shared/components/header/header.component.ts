import { Component, inject } from '@angular/core';
import { ToggleColorService } from '../../services/toggle-color.service';


@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  toggleColorService = inject(ToggleColorService);

}
