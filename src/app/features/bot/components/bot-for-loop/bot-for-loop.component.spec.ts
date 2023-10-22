import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotForLoopComponent } from './bot-for-loop.component';

describe('BotForLoopComponent', () => {
  let component: BotForLoopComponent;
  let fixture: ComponentFixture<BotForLoopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotForLoopComponent]
    });
    fixture = TestBed.createComponent(BotForLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
