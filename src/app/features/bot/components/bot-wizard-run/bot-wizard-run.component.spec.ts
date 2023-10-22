import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotWizardRunComponent } from './bot-wizard-run.component';

describe('BotWizardRunComponent', () => {
  let component: BotWizardRunComponent;
  let fixture: ComponentFixture<BotWizardRunComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotWizardRunComponent]
    });
    fixture = TestBed.createComponent(BotWizardRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
