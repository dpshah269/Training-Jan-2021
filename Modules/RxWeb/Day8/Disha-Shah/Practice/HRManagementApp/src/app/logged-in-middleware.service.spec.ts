import { TestBed } from '@angular/core/testing';

import { LoggedInMiddlewareService } from './logged-in-middleware.service';

describe('LoggedInMiddlewareService', () => {
  let service: LoggedInMiddlewareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggedInMiddlewareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
