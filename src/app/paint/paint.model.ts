import {PencilService} from './services/pencil/pencil.service';

export declare interface BasicInteraction {
  init(canvas: HTMLCanvasElement, component: any, config: any): void;
  update(): void;
  clearEventListeners(): void;
}

export interface Interactions {
  pencil: PencilService;
}

export type Mode = keyof Interactions;
