import { TestBed } from '@angular/core/testing';

import { JavaCallService } from './java-call.service';

describe('JavaCallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JavaCallService = TestBed.get(JavaCallService);
    expect(service).toBeTruthy();
  });
});
