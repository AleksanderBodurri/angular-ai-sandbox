import { Component, ChangeDetectionStrategy, input, output, signal, inject, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Action {
  label: string;
}

@Component({
  selector: 'app-split-button',
  templateUrl: './split-button.component.html',
  styleUrl: './split-button.component.css',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:click)': 'onDocumentClick($event)',
  },
})
export class SplitButtonComponent {
  primaryAction = input.required<Action>();
  secondaryActions = input<Action[]>([]);
  actionSelected = output<Action>();

  isMenuOpen = signal(false);

  private elementRef = inject(ElementRef);

  onDocumentClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target) && this.isMenuOpen()) {
      this.isMenuOpen.set(false);
    }
  }

  selectPrimaryAction(): void {
    this.actionSelected.emit(this.primaryAction());
    this.isMenuOpen.set(false);
  }

  selectSecondaryAction(action: Action): void {
    this.actionSelected.emit(action);
    this.isMenuOpen.set(false);
  }

  toggleMenu(): void {
    if (this.secondaryActions().length > 0) {
      this.isMenuOpen.update(open => !open);
    }
  }
}
