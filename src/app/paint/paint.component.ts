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

  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;

  constructor(private paintService: PaintService) { }

  ngOnInit() {}

  switchMode(payload: ModePayload<any>) {
    console.log('switchMode', payload);
    if (this.mode && this.mode !== payload.mode) {
      this.paintService.clearListeners(this.mode);
    }
    this.mode = payload.mode;
    this.paintService.initInteraction(this.mode, this.canvas.nativeElement, payload.config);
  }
}
