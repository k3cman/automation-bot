import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotWizardContainerComponent } from './bot-wizard-container.component';

describe('BotWizardContainerComponent', () => {
  let component: BotWizardContainerComponent;
  let fixture: ComponentFixture<BotWizardContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotWizardContainerComponent]
    });
    fixture = TestBed.createComponent(BotWizardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
