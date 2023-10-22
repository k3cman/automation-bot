import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotComponent } from './bot.component';
import { BotWizardComponent } from './components/bot-wizard/bot-wizard.component';
import { BotWizardContainerComponent } from './components/bot-wizard-container/bot-wizard-container.component';
import { BotForLoopComponent } from './components/bot-for-loop/bot-for-loop.component';
import { BotChildActionComponent } from './components/bot-child-action/bot-child-action.component';
import { BotSelectChildComponent } from './components/bot-select-child/bot-select-child.component';
import { BotWizardRunComponent } from './components/bot-wizard-run/bot-wizard-run.component';
import { BotWizardInitialComponent } from './components/bot-wizard-initial/bot-wizard-initial.component';
import {ButtonModule} from "../../shared/button/button.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
    declarations: [
        BotComponent,
        BotWizardComponent,
        BotWizardContainerComponent,
        BotForLoopComponent,
        BotChildActionComponent,
        BotSelectChildComponent,
        BotWizardRunComponent,
        BotWizardInitialComponent
    ],
    exports: [
        BotComponent
    ],
  imports: [
    CommonModule,
    ButtonModule,
    ReactiveFormsModule
  ]
})
export class BotModule { }
