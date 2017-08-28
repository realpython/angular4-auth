import { TestBed, inject } from '@angular/core/testing';

import { LoginRedirectService } from './login-redirect.service';

describe('LoginRedirectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginRedirectService]
    });
  });

  it('should be created', inject([LoginRedirectService], (service: LoginRedirectService) => {
    expect(service).toBeTruthy();
  }));
});
