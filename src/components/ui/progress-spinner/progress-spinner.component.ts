import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

type SpinnerSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-progress-spinner',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './progress-spinner.component.css',
  host: {
    'role': 'status',
    '[class]': 'sizeClasses()',
  },
  template: `
    <svg class="spinner" viewBox="0 0 50 50">
      <circle
        class="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        [attr.stroke-width]="strokeWidth()"
        [class]="colorClass()"
      ></circle>
    </svg>
    <span class="sr-only">Loading...</span>
  `,
})
export class ProgressSpinnerComponent {
  size = input<SpinnerSize>('md');
  colorClass = input<string>('stroke-indigo-600'); // e.g., 'stroke-red-500'

  sizeClasses = computed(() => {
    switch (this.size()) {
      case 'sm':
        return 'h-6 w-6';
      case 'md':
        return 'h-10 w-10';
      case 'lg':
        return 'h-16 w-16';
      default:
        return 'h-10 w-10';
    }
  });

  strokeWidth = computed(() => {
    // A thicker stroke for the smaller spinner looks better proportionally.
    switch (this.size()) {
      case 'sm':
        return 5;
      case 'md':
        return 4;
      case 'lg':
        return 4;
      default:
        return 4;
    }
  });
}
