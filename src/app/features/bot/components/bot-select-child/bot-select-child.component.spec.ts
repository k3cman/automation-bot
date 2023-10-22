import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotSelectChildComponent } from './bot-select-child.component';

describe('BotSelectChildComponent', () => {
  let component: BotSelectChildComponent;
  let fixture: ComponentFixture<BotSelectChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotSelectChildComponent]
    });
    fixture = TestBed.createComponent(BotSelectChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
