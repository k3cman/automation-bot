import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-bot-wizard-container',
  templateUrl: './bot-wizard-container.component.html',
  styleUrls: ['./bot-wizard-container.component.css']
})
export class BotWizardContainerComponent {
  @Input() title!: string;

}
