import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitButtonComponent as UiSplitButtonComponent, Action } from '../../ui/split-button/split-button.component';

@Component({
  selector: 'app-split-button-example',
  templateUrl: './split-button.component.html',
  styleUrl: './split-button.component.css',
  imports: [CommonModule, UiSplitButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplitButtonComponent {
  primaryAction: Action = { label: 'Save' };
  secondaryActions: Action[] = [
    { label: 'Save as...' },
    { label: 'Export to PDF' },
    { label: 'Export to Word' },
  ];

  lastAction = signal<string | null>(null);

  onAction(action: Action): void {
    this.lastAction.set(action.label);
  }
}
