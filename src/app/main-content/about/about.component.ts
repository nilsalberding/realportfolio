import { Component } from '@angular/core';
import { TypewriterComponent } from '../../shared/components/typewriter/typewriter.component';

@Component({
  selector: 'app-about',
  imports: [TypewriterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
