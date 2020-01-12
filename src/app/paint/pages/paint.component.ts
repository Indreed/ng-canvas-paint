import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Mode} from '../paint.model';
import {MainService} from '../services/main.service';

@Component({
  selector: 'app-paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.scss']
})
export class PaintComponent implements OnInit {
  public mode: Mode = 'pencil';
  private ctx: CanvasRenderingContext2D;

  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;

  constructor(private el: ElementRef, private mainService: MainService) { }

  ngOnInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');

    this.initInteraction();
  }

  initInteraction() {
    this.mainService.interactions[this.mode].init(this.canvas.nativeElement, this.el.nativeElement, {});
  }

  switchMode() {
    console.log('switched to', this.mode);
  }
}
