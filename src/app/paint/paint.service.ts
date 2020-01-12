import {Injectable, Injector} from '@angular/core';
import {PaintModule} from './paint.module';
import {PencilService} from './pencil/pencil.service';
import {Interactions, Mode} from './paint.model';
import {PencilConfig} from './pencil/pencil.model';
import {BrushService} from './brush/brush.service';

@Injectable({
  providedIn: 'root'
})
export class PaintService {

  private interactions: Interactions = {
    pencil: this.pencilService,
    brush: this.brushService
  };

  constructor(private pencilService: PencilService, private brushService: BrushService) { }

  initInteraction(mode: Mode, canvas: HTMLCanvasElement, config: any): void {
    this.interactions[mode].init(canvas, config);
  }

  clearListeners(mode: Mode) {
    console.log('clearListeners for', mode);
    this.interactions[mode].clearEventListeners();
  }
}
