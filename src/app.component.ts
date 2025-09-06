import { Component, ChangeDetectionStrategy, signal, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SandboxViewComponent } from './components/sandbox-view/sandbox-view.component';
import { ComponentRegistryService } from './services/component-registry.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, SidebarComponent, SandboxViewComponent],
})
export class AppComponent {
  selectedComponent = signal<Type<any> | null>(null);
  selectedComponentName = signal<string>('');
  
  private componentMap: Map<string, Type<any>>;

  constructor(private registry: ComponentRegistryService) {
    this.componentMap = this.registry.getComponentMap();
    
    // Select the first component by default
    const firstComponent = this.componentMap.entries().next().value;
    if (firstComponent) {
      this.onComponentSelected(firstComponent[0]);
    }
  }

  onComponentSelected(name: string): void {
    const component = this.componentMap.get(name);
    if (component) {
      this.selectedComponent.set(component);
      this.selectedComponentName.set(name);
    }
  }
}