import {PencilService} from './pencil/pencil.service';

export declare interface BasicInteraction {
  init(canvas: HTMLCanvasElement, config: any): void;
  update(config: any): void;
  clearEventListeners(): void;
}

export interface Interactions {
  pencil: PencilService;
}

export type Mode = keyof Interactions;

export interface ModePayload<C> {
  mode: Mode;
  config?: C;
}
