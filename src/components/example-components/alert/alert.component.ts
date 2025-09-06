import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AlertComponent as UiAlertComponent } from '../../ui/alert/alert.component';

@Component({
  selector: 'app-alert-example',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css',
  imports: [UiAlertComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent {}