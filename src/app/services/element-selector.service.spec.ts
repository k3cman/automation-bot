import { TestBed } from '@angular/core/testing';

import { ElementSelectorService } from './element-selector.service';

describe('ElementSelectorService', () => {
  let service: ElementSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElementSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
