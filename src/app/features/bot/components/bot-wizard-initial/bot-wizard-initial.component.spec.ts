import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotWizardInitialComponent } from './bot-wizard-initial.component';

describe('BotWizardInitialComponent', () => {
  let component: BotWizardInitialComponent;
  let fixture: ComponentFixture<BotWizardInitialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotWizardInitialComponent]
    });
    fixture = TestBed.createComponent(BotWizardInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
