import { TestBed } from '@angular/core/testing';

import { AuthorizationResolverService } from './authorization-resolver.service';

describe('AuthorizationResolverService', () => {
  let service: AuthorizationResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizationResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
