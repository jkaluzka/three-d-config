import {TestBed} from '@angular/core/testing';

import {Geometry, ShapeService} from './shape.service';

describe('ShapeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShapeService = TestBed.get(ShapeService);
    expect(service).toBeTruthy();
  });

  describe('getGeometry', () => {
    it('should return shape for SPHERE', () => {
      const service: ShapeService = TestBed.get(ShapeService);
      const shape = service.getGeometryShape({geometry: Geometry.SPHERE, parameters: {}});
      expect(shape.geometry.type).toEqual('SphereGeometry');
    });

    it('should return shape for CUBE', () => {
      const service: ShapeService = TestBed.get(ShapeService);
      const shape = service.getGeometryShape({geometry: Geometry.CUBE, parameters: {}});
      expect(shape.geometry.type).toEqual('BoxGeometry');
    });

    it('should return shape for CYLINDER', () => {
      const service: ShapeService = TestBed.get(ShapeService);
      const shape = service.getGeometryShape({geometry: Geometry.CYLINDER, parameters: {}});
      expect(shape.geometry.type).toEqual('CylinderGeometry');
    });

    it('should return null for unknown geometry', () => {
      const service: ShapeService = TestBed.get(ShapeService);
      const shape = service.getGeometryShape({geometry: 'another' as Geometry, parameters: {}});
      expect(shape).toEqual(null);
    });
  });

});
