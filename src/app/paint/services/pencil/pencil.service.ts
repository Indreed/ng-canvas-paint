import {Injectable} from '@angular/core';
import {BasicInteraction} from '../../paint.model';

@Injectable({
  providedIn: 'root'
})
export class PencilService implements BasicInteraction {
  public initialized = false;
  private ctx: CanvasRenderingContext2D;
  private canvas: any;
  private component: any;
  private onMouseUpBound: any;
  private onMouseDownBound: any;
  private onMouseMoveBound: any;

  constructor() { }

  update(): void {
  }

  clearEventListeners(): void {
    this.canvas.removeEventListener('mousedown', this.onMouseDownBound);
    this.canvas.removeEventListener('mouseup', this.onMouseUpBound);
  }

  addPoint(e) {
    this.ctx.beginPath();
    this.ctx.arc(e.offsetX, e.offsetY, 1, 0, 2 * Math.PI);
    this.ctx.fill();
  }

  addLine(e) {
    this.ctx.lineTo(e.offsetX, e.offsetY);
    this.ctx.stroke();
  }

  onMouseDown(e) {
    console.log('onMouseDown');
    this.addPoint(e);
    this.ctx.beginPath();
    this.ctx.moveTo(e.offsetX, e.offsetY);

    if (!this.onMouseMoveBound) {
      this.onMouseMoveBound = this.onMouseMove.bind(this);
    }
    this.canvas.addEventListener('mousemove', this.onMouseMoveBound);
  }

  onMouseUp(e) {
    console.log('onMouseUp');
    this.canvas.removeEventListener('mousemove', this.onMouseMoveBound);
  }

  onMouseMove(e) {
    console.log('onMouseMove');
    this.addLine(e);
  }

  addEventListeners() {
    if (!this.onMouseDownBound) {
      this.onMouseDownBound = this.onMouseDown.bind(this);
    }
    this.canvas.addEventListener('mousedown', this.onMouseDownBound);

    if (!this.onMouseUpBound) {
      this.onMouseUpBound = this.onMouseUp.bind(this);

    }
    this.canvas.addEventListener('mouseup', this.onMouseUpBound);
  }

  setupCtx() {
    this.ctx.fillStyle = '#000';
    this.ctx.lineWidth = 1;
    this.ctx.lineJoin = 'round';
    this.ctx.lineCap = 'round';
  }

  init(canvas: HTMLCanvasElement, component: any, config: any): void {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.component = component;

    this.setupCtx();
    this.addEventListeners();
    this.initialized = true;
  }
}
