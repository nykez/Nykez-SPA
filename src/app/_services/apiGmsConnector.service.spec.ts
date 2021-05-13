/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiGmsConnectorService } from './apiGmsConnector.service';

describe('Service: ApiGmsConnector', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiGmsConnectorService]
    });
  });

  it('should ...', inject([ApiGmsConnectorService], (service: ApiGmsConnectorService) => {
    expect(service).toBeTruthy();
  }));
});
