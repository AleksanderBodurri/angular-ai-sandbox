import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonSwitchComponent as UiButtonSwitchComponent } from '../../ui/button-switch/button-switch.component';

@Component({
  selector: 'app-button-switch-example',
  templateUrl: './button-switch.component.html',
  styleUrl: './button-switch.component.css',
  imports: [CommonModule, UiButtonSwitchComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonSwitchComponent {
  billingOptions = ['Monthly', 'Annually'];
  billingCycle = signal(this.billingOptions[0]);

  notificationOptions = ['Everything', 'Email', 'Push', 'Nothing'];
  notificationPreference = signal(this.notificationOptions[1]);
}
