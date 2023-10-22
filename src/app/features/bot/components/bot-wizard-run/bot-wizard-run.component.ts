import { Component } from '@angular/core';
import {BotWizardBaseComponent} from "../bot-wizard-base/bot-wizard-base.component";
import {ElementSelectorService} from "../../../../services/element-selector.service";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-bot-wizard-run',
  templateUrl: './bot-wizard-run.component.html',
  styleUrls: ['./bot-wizard-run.component.css']
})
export class BotWizardRunComponent  extends  BotWizardBaseComponent{
  formCtrl = new FormControl('', [Validators.required])

  constructor(
    public service: ElementSelectorService
  ) {
    super();
  }

  run(){
    this.service.finish(this.formCtrl.value as string)
    this.next.emit();
  }

}
