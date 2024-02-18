import { Component, input, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  label =  input.required<string>();
}
