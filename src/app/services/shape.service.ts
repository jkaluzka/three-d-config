import {Injectable} from '@angular/core';
import * as THREE from 'three';

export enum Geometry {
  SPHERE = 'sphere',
  CUBE = 'cube',
  CYLINDER = 'cylinder',
}

interface Part {
  geometry: Geometry;
  parameters: any;
}

@Injectable({
  providedIn: 'root',
})
export class ShapeService {

  constructor() { }

  shaper = {
    [Geometry.SPHERE]: (parameters: any) => new THREE.SphereGeometry(parameters.radius),
    [Geometry.CUBE]: (parameters: any) => new THREE.BoxGeometry(parameters.height, parameters.height, parameters.height),
    [Geometry.CYLINDER]: (parameters: any) => new THREE.CylinderGeometry(parameters.radius, parameters.radius, parameters.height),
  };

  getGeometryShape(part: Part): any {
    const {geometry, parameters} = part;

    // guard for not performing any action if geometry not supported
    if (!this.shaper[geometry]) {
      return null;
    }
    const material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true});
    const shape = this.shaper[geometry] && this.shaper[geometry](parameters);
    return new THREE.Mesh(shape, material);
  }
}
