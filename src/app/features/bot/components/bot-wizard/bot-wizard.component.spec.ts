import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotWizardComponent } from './bot-wizard.component';

describe('BotWizardComponent', () => {
  let component: BotWizardComponent;
  let fixture: ComponentFixture<BotWizardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotWizardComponent]
    });
    fixture = TestBed.createComponent(BotWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
