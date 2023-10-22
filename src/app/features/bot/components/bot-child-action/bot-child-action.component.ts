import {Component, EventEmitter, Output} from '@angular/core';
import {BotWizardBaseComponent} from "../bot-wizard-base/bot-wizard-base.component";
import {ElementSelectorService} from "../../../../services/element-selector.service";

@Component({
  selector: 'app-bot-child-action',
  templateUrl: './bot-child-action.component.html',
  styleUrls: ['./bot-child-action.component.css']
})
export class BotChildActionComponent extends BotWizardBaseComponent{
  constructor(
    private service: ElementSelectorService
  ) {
    super();
  }
  clickButton(){
    this.service.setLoopMode('BUTTON')
    this.next.emit()
  }

  modifyInput(){

    this.service.setLoopMode('INPUT')
    this.next.emit()
  }
}
