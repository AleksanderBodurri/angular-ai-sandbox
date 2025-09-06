import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-switch',
  templateUrl: './button-switch.component.html',
  styleUrl: './button-switch.component.css',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonSwitchComponent {
  options = input.required<string[]>();
  value = input<string>();
  valueChange = output<string>();

  selectOption(option: string): void {
    this.valueChange.emit(option);
  }
}
