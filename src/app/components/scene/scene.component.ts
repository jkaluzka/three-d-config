import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss'],
})
export class SceneComponent implements OnInit {
  @Input() modelId: string;

  constructor() { }

  ngOnInit() {
  }
}
