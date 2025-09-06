import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ButtonComponent as UiButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'app-button-example',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  imports: [UiButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {}