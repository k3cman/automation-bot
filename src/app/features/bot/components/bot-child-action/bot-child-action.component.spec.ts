import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotChildActionComponent } from './bot-child-action.component';

describe('BotChildActionComponent', () => {
  let component: BotChildActionComponent;
  let fixture: ComponentFixture<BotChildActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotChildActionComponent]
    });
    fixture = TestBed.createComponent(BotChildActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
