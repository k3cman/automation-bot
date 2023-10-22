import {Component} from '@angular/core';
import {BotWizardBaseComponent} from "../bot-wizard-base/bot-wizard-base.component";
import {ElementSelectorService} from "../../../../services/element-selector.service";

@Component({
  selector: 'app-bot-for-loop',
  templateUrl: './bot-for-loop.component.html',
  styleUrls: ['./bot-for-loop.component.css']
})
export class BotForLoopComponent extends BotWizardBaseComponent{
  constructor(
    public elementSelector: ElementSelectorService
  ) {
    super();
    this.elementSelector.start()
  }

  restart() {
    this.elementSelector.restart()
    this.elementSelector.start()
  }
}
