import { TestBed } from '@angular/core/testing';

import { ServiceSettingsService } from './service-settings.service';

describe('ServiceSettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceSettingsService = TestBed.get(ServiceSettingsService);
    expect(service).toBeTruthy();
  });
});
