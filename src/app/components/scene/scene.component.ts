import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss'],
})
export class SceneComponent implements OnInit, AfterViewInit {
  @Input() modelId: string;
  @ViewChild('scene', {static: false}) sceneContainer: ElementRef;

  renderer = new THREE.WebGLRenderer();
  scene = null;
  camera = null;

  constructor() { }

  ngOnInit() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.z = 1000;
  }

  ngAfterViewInit(): void {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.sceneContainer.nativeElement.appendChild(this.renderer.domElement);
  }
}
