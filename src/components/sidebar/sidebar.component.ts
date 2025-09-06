import { Component, ChangeDetectionStrategy, output, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentRegistryService } from '../../services/component-registry.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  imports: [CommonModule],
})
export class SidebarComponent {
  componentSelected = output<string>();
  selectedComponentName = input.required<string>();
  
  componentNames: string[];

  constructor(private registry: ComponentRegistryService) {
    this.componentNames = this.registry.getComponentNames().sort();
  }

  selectComponent(name: string): void {
    this.componentSelected.emit(name);
  }
}