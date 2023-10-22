import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-bot-for-loop',
  templateUrl: './bot-for-loop.component.html',
  styleUrls: ['./bot-for-loop.component.css']
})
export class BotForLoopComponent {

  @Output() nextStep = new EventEmitter<void>()

}
