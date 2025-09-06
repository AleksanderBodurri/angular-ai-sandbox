import { Component, ChangeDetectionStrategy, input, Type } from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';

// Import all components that can be dynamically rendered
import { AlertComponent } from '../example-components/alert/alert.component';
import { ButtonComponent } from '../example-components/button/button.component';
import { ButtonSwitchComponent } from '../example-components/button-switch/button-switch.component';
import { CardComponent } from '../example-components/card/card.component';
import { ProgressSpinnerComponent } from '../example-components/progress-spinner/progress-spinner.component';
import { SplitButtonComponent } from '../example-components/split-button/split-button.component';

@Component({
  selector: 'app-sandbox-view',
  templateUrl: './sandbox-view.component.html',
  imports: [
    CommonModule,
    NgComponentOutlet,
    AlertComponent,
    ButtonComponent,
    ButtonSwitchComponent,
    CardComponent,
    ProgressSpinnerComponent,
    SplitButtonComponent,
  ],
})
export class SandboxViewComponent {
  component = input.required<Type<any>>();
}
