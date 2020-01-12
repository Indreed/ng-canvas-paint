import {Injectable} from '@angular/core';
import {BasicInteraction} from '../paint.model';
import {PencilConfig} from './pencil.model';

@Injectable({
  providedIn: 'root'
})
export class PencilService implements BasicInteraction {
  public initialized = false;
  public ctx: CanvasRenderingContext2D;
  public size = 1;
  private canvas: any;
  private onMouseUpBound: any;
  private onMouseDownBound: any;
  private onMouseMoveBound: any;

  constructor() { }

  update(config: PencilConfig): void {
    this.changeColor(config.color);
  }

  clearEventListeners(): void {
    this.canvas.removeEventListener('mousedown', this.onMouseDownBound);
    document.removeEventListener('mouseup', this.onMouseUpBound);
    this.initialized = false;
  }

  addPoint(e) {
    this.ctx.beginPath();
    this.ctx.arc(e.offsetX, e.offsetY, this.size / 2, 0, 2 * Math.PI);
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
    document.addEventListener('mouseup', this.onMouseUpBound);
  }

  changeColor(color: string) {
    this.ctx.strokeStyle = color;
    this.ctx.fillStyle = color;
  }

  setupCtx() {
    this.ctx.lineWidth = this.size;
    this.ctx.lineJoin = 'round';
    this.ctx.lineCap = 'round';
  }

  init(canvas: HTMLCanvasElement, config: PencilConfig): void {
    if (!this.initialized) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.setupCtx();
      this.addEventListeners();
      this.initialized = true;
    }

    this.update(config);
  }
}
