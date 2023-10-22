import {Component, EventEmitter, Output} from '@angular/core';
import {ElementSelectorService} from "../../../../services/element-selector.service";
import {BotWizardBaseComponent} from "../bot-wizard-base/bot-wizard-base.component";

@Component({
  selector: 'app-bot-select-child',
  templateUrl: './bot-select-child.component.html',
  styleUrls: ['./bot-select-child.component.css']
})
export class BotSelectChildComponent extends  BotWizardBaseComponent{

  constructor(
    private selector: ElementSelectorService
  ) {
    super()
    this.selector.startInElementListening()
    this.selector.selectedSubElement$.subscribe(data => {
      this.next.emit()
    })
  }

}
