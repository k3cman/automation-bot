import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-bot-select-child',
  templateUrl: './bot-select-child.component.html',
  styleUrls: ['./bot-select-child.component.css']
})
export class BotSelectChildComponent {
  @Output() nextStep = new EventEmitter<void>()

}
