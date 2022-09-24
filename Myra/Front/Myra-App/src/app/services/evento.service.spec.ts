/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { StationService } from './station.service';

describe('Service: Station', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StationService]
    });
  });

  it('should ...', inject([StationService], (service: StationService) => {
    expect(service).toBeTruthy();
  }));
});
