import {Directive, EventEmitter, Output} from "@angular/core";

@Directive()
export abstract class BotWizardBaseComponent {
  @Output() next = new EventEmitter<void>()
}
