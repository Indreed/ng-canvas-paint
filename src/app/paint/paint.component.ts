import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Mode, ModePayload} from './paint.model';
import {PaintService} from './paint.service';

@Component({
  selector: 'app-paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.scss']
})
export class PaintComponent implements OnInit {
  public mode: Mode;
  private ctx: CanvasRenderingContext2D;
  private interactionCtx: CanvasRenderingContext2D;

  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  @ViewChild('interactionCanvas', { static: true }) interactionCanvas: ElementRef<HTMLCanvasElement>;

  constructor(private paintService: PaintService) { }

  ngOnInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.interactionCtx = this.interactionCanvas.nativeElement.getContext('2d');
  }

  moveToMainCanvas() {
    const interactionCanvas = this.interactionCanvas.nativeElement;

    this.ctx.drawImage(interactionCanvas, 0, 0);
    this.interactionCtx.clearRect(0, 0, interactionCanvas.width, interactionCanvas.height);
  }

  switchMode(payload: ModePayload<any>) {
    console.log('switchMode', payload);
    if (this.mode && this.mode !== payload.mode) {
      this.paintService.clear(this.mode);
      this.moveToMainCanvas();
    }
    this.mode = payload.mode;
    this.paintService.initInteraction(this.mode, this.interactionCanvas.nativeElement, payload.config);
  }
}
