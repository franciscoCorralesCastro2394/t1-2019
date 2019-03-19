import { TestBed } from '@angular/core/testing';

import { NoticiasServiceService } from './noticias-service.service';

describe('NoticiasServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoticiasServiceService = TestBed.get(NoticiasServiceService);
    expect(service).toBeTruthy();
  });
});
