import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerComponent as UiProgressSpinnerComponent } from '../../ui/progress-spinner/progress-spinner.component';

@Component({
  selector: 'app-progress-spinner-example',
  templateUrl: './progress-spinner.component.html',
  styleUrl: './progress-spinner.component.css',
  imports: [CommonModule, UiProgressSpinnerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressSpinnerComponent {}
