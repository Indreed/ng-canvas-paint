import {Injectable, Injector} from '@angular/core';
import {PaintModule} from './paint.module';
import {PencilService} from './pencil/pencil.service';
import {Interactions, Mode} from './paint.model';
import {PencilConfig} from './pencil/pencil.model';

@Injectable({
  providedIn: 'root'
})
export class PaintService {

  private interactions: Interactions = {
    pencil: this.pencilService
  };

  constructor(private pencilService: PencilService) { }

  initInteraction(mode: Mode, canvas: HTMLCanvasElement, config: any): void {
    this.interactions[mode].init(canvas, config);
  }

  clearListeners(mode: Mode) {
    console.log('clearlisteners');
    this.interactions[mode].clearEventListeners();
  }
}
