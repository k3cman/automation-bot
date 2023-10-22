import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-bot-child-action',
  templateUrl: './bot-child-action.component.html',
  styleUrls: ['./bot-child-action.component.css']
})
export class BotChildActionComponent {

  @Output() nextStep = new EventEmitter<void>()

}
