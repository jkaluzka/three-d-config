import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';

import {ModelsService} from './models.service';

describe('ModelsService', () => {
  let service: ModelsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule,
        ],
        providers: [
          ModelsService,
        ],
      });

      service = TestBed.get(ModelsService);
      httpMock = TestBed.get(HttpTestingController);
    },
  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getModelConfig should return Observable with data', () => {
    service.getModelConfig('modelId').subscribe();
    httpMock.expectOne('http://localhost:3000/models/modelId/config');
    httpMock.verify();
  });
});
