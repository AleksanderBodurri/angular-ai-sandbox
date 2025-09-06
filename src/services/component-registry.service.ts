import { Injectable, Type } from '@angular/core';
import { AlertComponent } from '../components/example-components/alert/alert.component';
import { ButtonComponent } from '../components/example-components/button/button.component';
import { ButtonSwitchComponent } from '../components/example-components/button-switch/button-switch.component';
import { CardComponent } from '../components/example-components/card/card.component';
import { ProgressSpinnerComponent } from '../components/example-components/progress-spinner/progress-spinner.component';
import { SplitButtonComponent } from '../components/example-components/split-button/split-button.component';

@Injectable({ providedIn: 'root' })
export class ComponentRegistryService {
  private componentMap = new Map<string, Type<any>>();

  constructor() {
    this.registerComponent('Alert', AlertComponent);
    this.registerComponent('Button', ButtonComponent);
    this.registerComponent('Button Switch', ButtonSwitchComponent);
    this.registerComponent('Card', CardComponent);
    this.registerComponent('Progress Spinner', ProgressSpinnerComponent);
    this.registerComponent('Split Button', SplitButtonComponent);
  }

  registerComponent(name: string, component: Type<any>): void {
    this.componentMap.set(name, component);
  }

  getComponentMap(): Map<string, Type<any>> {
    return this.componentMap;
  }

  getComponentNames(): string[] {
    return Array.from(this.componentMap.keys());
  }
}
