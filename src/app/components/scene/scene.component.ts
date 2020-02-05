import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import * as THREE from 'three';
import {ModelsService} from '../../services/models.service';
import {ShapeService} from '../../services/shape.service';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss'],
})
export class SceneComponent implements OnInit, AfterViewInit {
  @Input() modelId: string;
  @ViewChild('scene', {static: false}) sceneContainer: ElementRef;

  config: Observable<any>;
  renderer = new THREE.WebGLRenderer();
  scene = null;
  camera = null;

  constructor(
    private modelsService: ModelsService,
    private shapeService: ShapeService,
  ) {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 100, 1000);
    this.camera.position.z = 400;
    this.config = this.modelsService.getModelConfig(this.modelId);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.sceneContainer.nativeElement.appendChild(this.renderer.domElement);
    this.animate();
  }

  animate() {
    window.requestAnimationFrame(() => this.animate());
    this.scene.rotation.x += 0.01;
    this.scene.rotation.y += 0.02;
    this.renderer.render(this.scene, this.camera);
  }

  renderShape(part) {
    // clear scene
    this.scene.remove.apply(this.scene, this.scene.children);
    const shape = this.shapeService.getGeometryShape(part);
    if (shape) {
      // append shape to scene if implemented
      this.scene.add(shape);
    }
  }
}
