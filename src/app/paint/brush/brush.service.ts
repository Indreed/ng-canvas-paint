import { Injectable } from '@angular/core';
import {PencilService} from '../pencil/pencil.service';
import {BrushConfig} from './brush.model';

@Injectable({
  providedIn: 'root'
})
export class BrushService extends PencilService {

  constructor() {
    super();
  }

  changeSize(size: number) {
    this.size = size;
    this.ctx.lineWidth = size;
  }

  update(config: BrushConfig) {
    this.changeColor(config.color);
    this.changeSize(config.size);
  }
}
