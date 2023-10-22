import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BotWizardSteps} from "../../models/bot-wizard-steps.enum";
import {BehaviorSubject} from "rxjs";
import {ElementSelectorService} from "../../../../services/element-selector.service";

@Component({
  selector: 'app-bot-wizard',
  templateUrl: './bot-wizard.component.html',
  styleUrls: ['./bot-wizard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BotWizardComponent {
  private wizardStep: BehaviorSubject<BotWizardSteps> = new BehaviorSubject<BotWizardSteps>(BotWizardSteps.OFF);
  wizardStep$ = this.wizardStep.asObservable()

  BotWizardSteps = BotWizardSteps;

  constructor(
    private elementSelector: ElementSelectorService
  ) {
  }

  start() {
    // this.elementSelector.start()
    this.wizardStep.next(BotWizardSteps.LOOP)
  }

  childAction() {
    this.wizardStep.next(BotWizardSteps.CHILD_ACTION)
  }

  childContainer() {
    this.wizardStep.next(BotWizardSteps.SELECT_CHILD)
  }

  overview() {
    this.wizardStep.next(BotWizardSteps.RUN_ACTION)
  }

  finish() {
    this.elementSelector.restart();
    this.wizardStep.next(BotWizardSteps.OFF)
  }
}
