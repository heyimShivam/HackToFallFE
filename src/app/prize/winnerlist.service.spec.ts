import { TestBed } from '@angular/core/testing';

import { WinnerlistService } from './winnerlist.service';

describe('WinnerlistService', () => {
  let service: WinnerlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WinnerlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
